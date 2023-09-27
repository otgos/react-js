import React from "react";

const Style2 = () => {

    const pStyle = {
        color:"blue",
        textAlign:"justify",
        backgroundColor:"yellow"
    }

  return (
    <div>
      <h1>Internal Style</h1>
      <p style={pStyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
        repudiandae ipsam velit, fugit eligendi earum temporibus mollitia. Nisi
        assumenda dicta quaerat quas possimus pariatur suscipit fugiat, nesciunt
        quos eaque sapiente! Minima in, veritatis labore eum autem atque enim
        dolor, provident quia illo odio? Voluptatibus cum omnis harum fugit modi
        sunt error facilis voluptate necessitatibus, quidem a iure perferendis
        nostrum odio!Ï
      </p>

      <h2>Lorem, ipsum.</h2>
      <p style={{...pStyle, backgroundColor:"pink", fontSize:"1.2rem"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
        incidunt ipsum facilis perspiciatis quos inventore error accusantium
        tenetur blanditiis optio dolorem, consectetur quo saepe deleniti
        reiciendis ex temporibus vel! Dolorum. Dolorem unde voluptatibus
        repellat sequi ex corporis temporibus rem, quidem est labore perferendis
        veniam placeat nemo sapiente eos! Quo non accusantium id assumenda alias
        blanditiis eos molestiae aut. Asperiores, dignissimos!
      </p>
    </div>
  );
};

export default Style2;
