
export default function Thumbnail(props) {
    return (
        <div className="g-4 col-sm-12 col-lg-6 col-xl-4 col-xxl-3">
            <div className=" bg-white p-3 rounded-4 shadow" >
                <img src={props.src} alt="lol" className="rounded-3 w-100 mb-3" />
                <h2>Title {props.header}</h2>
                <p>{props.des}</p>
            </div>
        </div>
    )

}