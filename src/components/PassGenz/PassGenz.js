import React from "react";
import "./PassGenz.css";
import { useEffect, useState } from "react";

const PasswordGenerator = () => {
  const [passwords, setPasswords] = useState("");

  const [passwordLength, setPasswordLength] = useState(15);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [errors, setErrors] = useState({});

  const reset = () => {
    setUppercase(true);
    setLowercase(true);
    setNumbers(true);
    setSymbols(true);
    setPasswordLength(15);
    setPasswords("");
    setPassword([]);
  };

  const [password, setPassword] = useState(() => {
    const savedItems = localStorage.getItem("password");
    if (savedItems) {
      return JSON.parse(savedItems);
    } else {
      return [];
    }
  });

  useEffect(() => {
    const lsItems = localStorage.getItem("password");
    if (!lsItems) localStorage.setItem("password", JSON.stringify(password));
    else setPassword(JSON.parse(lsItems));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  const generatePassword = (event) => {
    event.preventDefault();

    if (!uppercase && !lowercase && !numbers && !symbols) {
      return setErrors("At least one character type must be selected");
    } else if (passwordLength === "0") {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "") {
      return setErrors("Invalid password length");
    } else if (passwordLength > 50) {
      return setErrors("Password length cannot exceed 50 characters");
    }

    const newPass = password;

    let pass = "";
    for (let i = 0; i < passwordLength; i++) {
      let choice = random(0, 3);
      if (lowercase && choice === 0) {
        pass += randomLower();
      } else if (uppercase && choice === 1) {
        pass += randomUpper();
      } else if (symbols && choice === 2) {
        pass += randomSymbol();
      } else if (numbers && choice === 3) {
        pass += random(0, 9);
      } else {
        i--;
      }
    }
    if (password.length > 10) password.splice(0, 1);
    setPassword([...newPass, pass]);

    setPasswords(pass);
  };

  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  // useEffect(() => {
  //   generatePassword()
  // }, [])

  return (
    <div className="app1">
      <span>Password Generator</span>
      <div className="password">{passwords}</div>
      <div className="container col-sm-5">
        <div className="subContainer">
          <div className="option">
            <label>Password length</label>
            <input
              type="number"
              name="length"
              min="4"
              max="50"
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>

          <div className="option">
            <label>Include Uppercase Letters</label>
            <input
              type="checkbox"
              name="uppercase"
              defaultChecked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
          </div>

          <div className="option">
            <label>Include Lowercase Letters</label>
            <input
              type="checkbox"
              name="lowercase"
              defaultChecked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
          </div>

          <div className="option">
            <label>Include Numbers</label>
            <input
              type="checkbox"
              name="numbers"
              defaultChecked={numbers}
              onChange={(e) => setNumbers(e.target.checked)}
            />
          </div>

          <div className="option">
            <label>Include Symbols</label>
            <input
              type="checkbox"
              name="symbols"
              defaultChecked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
          </div>

          {errors.length && <li className="error">{errors}</li>}

          <div className="d-flex justify-content-evenly">
          <div className="btn-group ">
            <div className="button">
              <input
                type="submit"
                name="generate"
                value="Generate"
                onClick={generatePassword}
              />
            </div>
            <div className="button">
              <input
                type="submit"
                name="reset"
                value="Reset"
                onClick={reset}
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {password.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PasswordGenerator;
