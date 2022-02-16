import './Subscription.css';

function subscription(){
    return(
        <div className="form">
            <input type="email" placeholder="Email address" id="input"/>
            <button type="submit" id="button">Request Access</button>
        </div>
    )
}

export default subscription;