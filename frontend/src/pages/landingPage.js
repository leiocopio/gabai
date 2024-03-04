//modules
import React from "react";
import Helmet from "react-helmet";

//components
import Sect1 from "../components/landingPage/sect1";
import Sect2 from "../components/landingPage/sect2";
import Sect3 from "../components/landingPage/sect3";
import Sect4 from "../components/landingPage/sect4";

function landingPage() {
  return (
    <>
      <Helmet>
        <title>GabAI</title>
      </Helmet>
      <div>
        <section>
          <Sect1></Sect1>
        </section>
        <section>
          <Sect2></Sect2>
        </section>
        <section>
          <Sect3></Sect3>
        </section>
        <section>
          <Sect4> </Sect4>
        </section>
      </div>
    </>
  );
}

export default landingPage;
