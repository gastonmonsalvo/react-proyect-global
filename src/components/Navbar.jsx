


const Navbar = () => {
  return (
    <>
        <div className="header">
            <div className="logotipo">
                <img src="/img/logo_proyect.png" alt="Logo de la app" />
                <h4>OriginDev</h4>
            </div>
            <div className="navbar">
                <a href="#">Developer Full Stack</a>
                <a href="#">Frontend</a>
                <a href="#">Backend</a>
                <a href="#">All Categories</a>
                <a href="#">About</a>
            </div>      
        </div>
        

        <style jsx>{`
            .header {
                display: flex;
                width: 100%;
                height: 100px;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;
                background-color: black;
                border-radius: 5px;
            }
            .logotipo {
                display: flex;
                justify-content: start;
                align-items: center;
                color: violet;
                flex-direction: column;
                & h4 {
                    margin: 5px 0;
                }
                & img {
                    display: flex;
                    width: 40px;
                }
            }

            .navbar {
                display: flex;
                justify-content: space-around;
                text-align: center;
                & a {
                        text-decoration: none;
                        margin-right: 10px;
                        color: green;
                    } a:hover {
                            color: violet;
                            transform: translateY(-3px);
                        }
            }
        `}</style>
    </>
  )
}

export default Navbar