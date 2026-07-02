// ColorPicker.jsx
const ColorPicker = ({ colors, value, onChange }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-300">
        Color
      </label>

      <div
        className="
          grid grid-flow-col
          grid-rows-3 justify-between
          gap-y-6 w-full
        "
      >
        {colors.map((color) => (
          <button
            key={color}
            type="button"
            onClick={() => onChange(color)}
            className={`
              h-11
              w-11
              rounded-lg
              transition-transform
              cursor-pointer
              ${
                value === color
                  ? "ring-2 ring-white"
                  : "border-2 border-gray-700"
              }
            `}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;