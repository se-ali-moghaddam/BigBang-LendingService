import './footer.css';

export default function Footer(props) {
    return (
        <footer id="footer">
            <div className="container">
                {props.children}
            </div>
        </footer>
    )
}