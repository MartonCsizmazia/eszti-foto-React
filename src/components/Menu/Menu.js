import './menu.css';



const Menu = (props) => {
  function switchLang(){
    if (localStorage.getItem("language") === "hungarian"){
      localStorage.setItem("language", "english");
    } else {
          localStorage.setItem("language", "hungarian");
    }
    console.log(localStorage.getItem("language"))
    props.switchLang();
  }

  return(
    <div id="menu-bar">
      <div className="menu-title">
        <a language="english" href="/" >Home</a>
        <a language="hungarian" href="/" >Főoldal</a>
      </div>
      <div className="menu-title dropdown">
        <a language="english" href="/#portfolio" className="dropbtn page-part" >Portfolio</a>
        <a language="hungarian" href="/#portfolio" className="dropbtn page-part" >Galéria</a>
        <div className="dropdown-content">
          {props.menuList.map(menuItem => (
            <a href={menuItem}>{menuItem.charAt(0).toUpperCase() + menuItem.slice(1)} </a>
          ))}
        </div>
      </div>
      <div className="menu-title dropdown">
        <a language="english" href="/#about" >About me</a>
        <a language="hungarian" href="/#about" >Rólam</a>
        <div className="dropdown-content" >
          <a language="english" href="/#aknowledgements">Aknowledgements</a>
          <a language="hungarian" href="/#aknowledgements" >Elismerések</a>
        </div>
      </div>
      <div className="menu-title">
        <a language="english" href="/#contact" >Contact</a>
        <a language="hungarian" href="/#contact" >Kapcsolat</a>
      </div>
        <div className="menu-title" id = "flag" onClick={switchLang}>
        {/* <%= image_tag 'flags/flag-400.png', language: "english", alt: 'Magyar nyelvű oldal', id: 'flag-picture', style: "width: 20%; cursor: pointer"%>
        <%= image_tag 'flags/illustration-uk-flag_53876-18166.webp', language: "hungarian", alt: 'Change to english', id: 'flag-picture', style: "width: 20%; cursor: pointer"%> */}

        <img language="english" style={MenuStyles.flagPicture} src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" alt="Magyar nyelvű oldal" ></img>
        <img language="hungarian" style={MenuStyles.flagPicture} src="https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png" alt="Change to english"></img>
      </div>
      <div className="social-media-icons menu-title">
        <div >
          <a href="https://www.facebook.com/stellanovakphoto" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        </div>
        <div >
          <a href="https://www.instagram.com/nesztiii/" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  )

}
const MenuStyles = {
  flagPicture:{
    height: "2vw",
    cursor: "pointer",
    margin: "0 auto"
  }
}

export default Menu
