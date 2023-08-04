import React, { memo, useEffect } from "react";
import { Benneritemli } from "../assets/css/MusicSub";
import Smallitem from "./Smallitem";

const Benneritem = memo(({ i, listname }) => {
  return (
    <>
      <Benneritemli>
        <ul>
          {i &&
            i.map((z) => <Smallitem key={z.rank} z={z} listname={listname} />)}
        </ul>
      </Benneritemli>
    </>
  );
});

export default Benneritem;
