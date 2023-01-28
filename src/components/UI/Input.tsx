import React from "react";
import { InputProps } from "../../interfaces/Interfaces";

const Input = (props : InputProps) => {
  const dateMaskHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    e.target.value = v;
  };

  return (
    <React.Fragment>
      {
        props.hasLabel && !props.hasIcon && props.id === "birth-date" && (
          <label key={props.id} htmlFor={props.id}>
            {props.label}
            <input
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              onInput={dateMaskHandler}
            />
          </label>
        )
      }
      {
        props.hasLabel && !props.hasIcon && props.id !== "birth-date" && (
          <label key={props.id} htmlFor={props.id}>
            {props.label}
            <input
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
            />
          </label>
        )
      }
      {
        !props.hasLabel && props.hasIcon && props.id !== "birth-date" && (
          <label key={props.id} htmlFor={props.id}>
            <input
              id={props.id}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.onChange}
              onFocus={props.onFocus}
              onBlur={props.onBlur}
            />
            <img src={props.icon} alt={props.alt} />
          </label>
        )
      }
    </React.Fragment>
  );
};

export default Input;