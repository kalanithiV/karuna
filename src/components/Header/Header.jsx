import Logo from "../../images/logoofficial.png"
export default function(){
    return(
        <div className="header_list">
            <div className="header_details">
<img src={Logo} />
<ul>
    <li>Platform.</li>
    <li>Solutions.</li>
    <li>Resources.</li>
    <li>Pricing.</li>
</ul>
</div>
 <div className="login_details">
<label>Log in</label>
<button>Get started</button>
</div>
        </div>
    )
}