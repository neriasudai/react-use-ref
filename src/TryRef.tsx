import { useState, useRef } from "react";

const TryRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onMouseOver={() => {
          inputRef.current?.focus();
        }}
      />
    </div>
  );
};

export default TryRef;
