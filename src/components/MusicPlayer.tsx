import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, ListMusic, Music } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);
  const [showList, setShowList] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const autoPlayBlocked = useRef(false);
  
  const listMusic = [
    {
      music: "Carefree Cadence",
      url: "/audios/Carefree_Cadence.mp3"
    },
    {
      music: "Dream Of Peace",
      url: "/audios/Dream_Of_Peace.mp3"
    },
    {
      music: "Hyper Drift",
      url: "/audios/Hyper_Driff.mp3"
    },
    {
      music: "Work Music",
      url: "/audios/Work_Music.mp3"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; 
    }
  }, []);

  // Retry playback on user interactions
  useEffect(() => {
    const events = ['click', 'scroll', 'keydown', 'touchstart', 'mousedown'];
    
    const handleInteraction = () => {
      // Try to play if we are logically playing OR if we were blocked from autoplaying
      if (audioRef.current && audioRef.current.paused && (isPlaying || autoPlayBlocked.current)) {
        audioRef.current.play()
          .then(() => {
            // Unmute on successful interaction-triggered play
            if (audioRef.current) {
               audioRef.current.muted = false;
               setIsMuted(false);
            }
            // Update state to playing and clear blocked flag
            setIsPlaying(true);
            autoPlayBlocked.current = false;
            
            // Playback started successfully, remove listeners
            events.forEach(event => window.removeEventListener(event, handleInteraction));
          })
          .catch(() => {
            // Failed, keep listening
          });
      }
    };

    events.forEach(event => window.addEventListener(event, handleInteraction, { passive: true }));

    return () => {
      events.forEach(event => window.removeEventListener(event, handleInteraction));
    };
  }, [isPlaying]);

  // Handle track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = listMusic[currentMusic].url;
      audioRef.current.load();
      // If we are supposed to be playing...
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay blocked by browser policy
            // We do NOT pause the UI anymore, as user requested "it must auto play".
            // We just note it's blocked so interaction listener can fix it.
            autoPlayBlocked.current = true;
          });
        }
      }
    }
  }, [currentMusic]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const nextMusic = () => {
    setCurrentMusic((prev) => (prev + 1) % listMusic.length);
    setIsPlaying(true);
  };

  const prevMusic = () => {
    setCurrentMusic((prev) => (prev - 1 + listMusic.length) % listMusic.length);
    setIsPlaying(true);
  };

  const selectMusic = (index: number) => {
    setCurrentMusic(index);
    setIsPlaying(true);
  };
  
  return (
    <div className="fixed bottom-6 left-6 z-9999 flex flex-col items-start gap-3 pointer-events-auto">
      <audio 
        ref={audioRef} 
        onEnded={nextMusic}
        preload="auto"
        autoPlay
      />
      
      {/* Playlist Popup */}
      <AnimatePresence>
        {showList && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-2 bg-white/90 dark:bg-stone-800/90 backdrop-blur-md border border-stone-300 dark:border-stone-600 rounded-xl p-3 shadow-2xl w-64 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-stone-200 dark:border-stone-700">
              <h3 className="text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider flex items-center gap-2">
                <ListMusic size={14} /> Playlist
              </h3>
              <span className="text-[10px] text-stone-400">{listMusic.length} tracks</span>
            </div>
            <div className="flex flex-col gap-1 max-h-48 overflow-y-auto custom-scrollbar">
              {listMusic.map((item, index) => (
                <button
                  key={index}
                  onClick={() => selectMusic(index)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-left transition-all text-xs font-serif ${
                    currentMusic === index 
                      ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 font-bold' 
                      : 'hover:bg-stone-100 dark:hover:bg-stone-700/50 text-stone-600 dark:text-stone-400'
                  }`}
                >
                  <span className="w-4 text-center opacity-50 text-[10px]">{index + 1}</span>
                  <span className="truncate flex-1">{item.music}</span>
                  {currentMusic === index && isPlaying && (
                    <motion.div 
                      className="flex gap-0.5 items-end h-3"
                    >
                      {[1, 2, 3].map((bar) => (
                        <motion.div
                          key={bar}
                          animate={{ height: [2, 12, 2] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 0.5 + bar * 0.1,
                            ease: "easeInOut" 
                          }}
                          className="w-0.5 bg-current rounded-full"
                        />
                      ))}
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Player Control */}
      <div className="flex items-center bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded-full p-2 shadow-2xl pr-5 gap-3 transition-all hover:scale-105 relative group">
        
        {/* Vinyl Record */}
        <motion.div
          onClick={togglePlay}
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ 
            repeat: Infinity, 
            duration: 5, 
            ease: "linear"
          }}
          className="w-12 h-12 rounded-full bg-gray-900 dark:bg-black border border-stone-400 flex items-center justify-center relative overflow-hidden cursor-pointer shrink-0 shadow-md group-hover:shadow-lg transition-shadow"
        >
           {/* Vinyl Texture */}
           <div className="absolute inset-1 rounded-full border border-stone-600/50 opacity-50"></div>
           <div className="absolute inset-3 rounded-full border border-stone-600/50 opacity-50"></div>
           <div className="absolute inset-4 rounded-full border border-stone-600/50 opacity-50"></div>
           
           {/* Center Label */}
           <div className="w-4 h-4 bg-red-700 rounded-full z-10 shadow-sm relative flex items-center justify-center">
              <div className="absolute inset-0.5 bg-white/40 rounded-full"></div>
              <div className="w-1 h-1 bg-black rounded-full z-20"></div>
           </div>
        </motion.div>

        {/* Controls & Info */}
        <div className="flex flex-col justify-center gap-1">
           <div className="flex items-center gap-2">
             <button 
               onClick={prevMusic}
               className="text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors p-2"
               aria-label="Previous song"
             >
               <SkipBack size={12} fill="currentColor" />
             </button>

             <button 
               onClick={togglePlay}
               className="text-stone-800 dark:text-stone-200 hover:text-red-700 transition-colors font-serif font-bold text-sm w-16 text-center flex items-center justify-center gap-1"
               aria-label={isPlaying ? "Pause" : "Play"}
             >
               {isPlaying ? <Pause size={12} fill="currentColor" /> : <Play size={12} fill="currentColor" />}
               <span className="text-xs">{isPlaying ? "PLAYING" : "PAUSED"}</span>
             </button>

             <button 
               onClick={nextMusic}
               className="text-stone-400 hover:text-stone-800 dark:hover:text-stone-200 transition-colors p-2"
               aria-label="Next song"
             >
               <SkipForward size={12} fill="currentColor" />
             </button>
           </div>
           
           {/* Song Title scrolling */}
           <div className="overflow-hidden w-32 h-4 relative flex items-center">
             <AnimatePresence mode='wait'>
               <motion.div 
                 key={currentMusic}
                 initial={{ y: 10, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: -10, opacity: 0 }}
                 className="w-full"
               >
                 <div className="whitespace-nowrap text-[10px] text-stone-500 dark:text-stone-400 font-serif italic flex items-center gap-1">
                   <Music size={8} />
                   {listMusic[currentMusic].music}
                 </div>
               </motion.div>
             </AnimatePresence>
           </div>
        </div>

        {/* Extra Controls (Mute & List) */}
        <div className="flex flex-col gap-1 pl-2 border-l border-stone-200 dark:border-stone-700 ml-1">
          <button 
            onClick={() => setShowList(!showList)}
            className={`transition-colors ${showList ? 'text-red-600' : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-200'}`}
            title="Playlist"
            aria-label="Toggle playlist"
          >
            <ListMusic size={14} />
          </button>
          <button 
            onClick={toggleMute}
            className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>

      </div>
    </div>
  );
};

export default MusicPlayer;