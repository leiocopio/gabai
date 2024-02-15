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
      <section>
        {/* 1st section of landing page */}
        <Sect1></Sect1>
      </section>

      <section>
        {/* 2nd section of landing page */}
        <Sect2></Sect2>
      </section>

      <section>
        {/* 3rd section of landing page */}
        <Sect3></Sect3>
      </section>

      <section>
        {/* 4th section of landing page */}
        <Sect4></Sect4>
      </section>
    </>
  );
}

export default landingPage;
