import React,{useRef} from "react";


function Color(props) {
  const { listColor, onChangeColor } = props;
  const refs = useRef(listColor.map(() => React.createRef()));

  const handleChooseColor = function (color,index) {
    if (!onChangeColor) return;
    onChangeColor(color);
    // cách 2
    // console.log(refs.current[index].innerText);
    // onChangeColor(refs.current[index].innerText);

  };
  return (
    <>
      {listColor.map((color, index) => (
        <div
          className="color"
          key={index}
          style={{ margin: "6px", cursor: "pointer" }}
        >
          <div
          ref={refs.current[index]}
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
            onClick={() =>  handleChooseColor(color,index)}
          ></div>
        </div>
      ))}
    </>
  );
}

export default Color;
