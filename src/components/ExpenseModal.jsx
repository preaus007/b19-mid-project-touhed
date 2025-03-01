export default function ExpenseModal({ open, onClose, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20 z-10" : "invisible"
      }`}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl shadow p-6 transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <button
          onClick={onClose}
          className="absolute top-1 right-2 p-1 rounded-lg text-md text-black transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
}
