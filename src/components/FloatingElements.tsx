import { Star, Heart, Cloud } from "lucide-react";

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="animate-float absolute top-20 left-[10%]">
        <Heart className="w-8 h-8 text-soft-pink" fill="#FFDEE2" />
      </div>
      <div className="animate-float absolute top-40 right-[15%] animation-delay-2000">
        <Star className="w-6 h-6 text-soft-yellow" fill="#FEF7CD" />
      </div>
      <div className="animate-float absolute bottom-32 left-[20%] animation-delay-1000">
        <Cloud className="w-10 h-10 text-soft-purple" fill="#E5DEFF" />
      </div>
      <div className="animate-twinkle absolute top-60 right-[25%]">
        <Star className="w-4 h-4 text-vibrant-purple" fill="#8B5CF6" />
      </div>
    </div>
  );
};