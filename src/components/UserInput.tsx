import { useState, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import styles from "../styles/buttons.module.css";

const UserInput = ({ setUserID, setRoomID }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [roomID, setInputRoomID] = useState<string>("");

  // Get the roomID from the URL on the first render
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setInputRoomID(params.get("roomId")?.toString() || "");
  }, []);

  const generateSimpleId = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const length = 4;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleGenerateRoomID = () => {
    const newRoomID = generateSimpleId();
    setInputRoomID(newRoomID);
    setRoomID(newRoomID);
  };

  const handleSubmit = () => {
    setUserID(inputValue);
    setRoomID(roomID);
  };

  return (
    <div className={styles.groups}>
      <div className={styles.groupInputs}>
        <Input
          className={styles.defaultInputs}
          type="text"
          width="auto"
          placeholder="Username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Input
          type="text"
          className={styles.defaultInputs}
          width="auto"
          placeholder="Room ID"
          value={roomID}
          onChange={(e) => setInputRoomID(e.target.value)}
        />
      </div>
      <div className={styles.groupButtons}>
        <Button
          colorScheme="gray"
          className={styles.defaultButtons}
          onClick={handleSubmit}
        >
          Iniciar
        </Button>
        <Button
          colorScheme="gray"
          className={styles.defaultButtons}
          onClick={handleGenerateRoomID}
        >
          Gerar Room ID
        </Button>
      </div>
    </div>
  );
};

export default UserInput;
