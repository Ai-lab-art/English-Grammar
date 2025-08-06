const Watermark = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 opacity-30 hover:opacity-100 transition-opacity duration-300">
      <div className="bg-gradient-rainbow text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
        Hom Bahadur Thapa
      </div>
    </div>
  );
};

export default Watermark;