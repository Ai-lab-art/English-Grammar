import { Button } from "@/components/ui/button";
import { BookOpen, Facebook, MessageCircle, Share2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthProvider";
import heroImage from "@/assets/hero-grammar.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const shareUrl = window.location.href;
  const shareText = "English Grammar - A comprehensive guide for secondary level students by Hom Bahadur Thapa";

  const handleShare = (platform: string) => {
    let url = '';
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
      case 'messenger':
        url = `https://www.facebook.com/dialog/send?link=${encodeURIComponent(shareUrl)}&app_id=YOUR_APP_ID`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL, so we'll copy to clipboard
        navigator.clipboard.writeText(shareText + ' ' + shareUrl);
        alert('Link copied to clipboard! You can paste it on Instagram.');
        return;
    }
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
        {/* Title Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="h-20 w-20 text-primary animate-pulse" />
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            English Grammar
          </h1>
          <p className="text-3xl text-white/90 mb-4 font-light drop-shadow-lg">
            A comprehensive guide for secondary level students
          </p>
          <p className="text-xl text-white font-medium bg-white/20 backdrop-blur-sm rounded-lg py-3 px-6 inline-block border border-white/30">
            Developed by: Hom Bahadur Thapa
          </p>
        </div>

        {/* Start Button */}
        <div className="pt-12 flex gap-4 justify-center">
          <Button asChild size="lg" className="text-2xl px-16 py-8 h-auto rounded-full bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <Link to="/topics">
              Start
            </Link>
          </Button>
          {!user && (
            <Button 
              size="lg" 
              onClick={() => navigate('/auth')}
              className="text-lg px-8 py-6 h-auto rounded-full bg-primary/20 backdrop-blur-sm text-white border border-primary/30 hover:bg-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Admin Login
            </Button>
          )}
        </div>

        {/* Social Media Sharing */}
        <div className="pt-16">
          <h3 className="text-lg text-white/80 mb-4">Share with others:</h3>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => handleShare('facebook')}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('whatsapp')}
              className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Share on WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('messenger')}
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Share on Messenger"
            >
              <Share2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleShare('instagram')}
              className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
              aria-label="Copy link for Instagram"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Index;
