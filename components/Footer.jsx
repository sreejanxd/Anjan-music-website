export default function Footer() {
    return (
        <footer className="py-10 mt-10 text-center">
            <p className="text-sm">Made ❤️ by <a className="hover:underline hover:text-primary" href="https://github.com/Siliguri-design">Anjan Dhar</a><span className="text-primary">.</span></p>
            <ul className="flex gap-1 items-center justify-center mt-1">
                <li><a className="text-xs bg-secondary hover:bg-primary hover:text-white rounded-full p-1 px-2" href="https://instagram.com/badboyanj" target="_blank">Instagram</a></li>
                <li><a className="text-xs bg-secondary hover:bg-primary hover:text-white rounded-full p-1 px-2" href="https://wa.me/qr/ONS6OC44U2MJB1" target="_blank">Whatsapp</a></li>
            </ul>
        </footer>
    )
}
