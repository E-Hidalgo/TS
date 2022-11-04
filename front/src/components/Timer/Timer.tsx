export default function Timer(props: any) {

    return (
        <div className="stopwatch">
                <span className="digits mili-sec">
               {/* hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) */}
                {("0" + Math.floor((props.time / 600000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            </span>
            <span className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
            </span>
        
        </div>
    );
}