import {
    Clock,
    Instagram,
    Facebook,
    Twitter,
    Phone,
    Mail,
    MapPin,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-deep-space border-t border-luxury-gold/10 py-16 px-6 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-6 h-6 text-luxury-gold" />
                            <span className="text-xl tracking-wider">
                                TimeTravel Agency
                            </span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Experience history's greatest moments with
                            unparalleled luxury and authenticity.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-luxury-gold/20 flex items-center justify-center hover:border-luxury-gold transition-colors"
                            >
                                <Instagram className="w-5 h-5 text-luxury-gold" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-luxury-gold/20 flex items-center justify-center hover:border-luxury-gold transition-colors"
                            >
                                <Facebook className="w-5 h-5 text-luxury-gold" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-luxury-gold/20 flex items-center justify-center hover:border-luxury-gold transition-colors"
                            >
                                <Twitter className="w-5 h-5 text-luxury-gold" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-luxury-gold">
                            Destinations
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Ancient Egypt
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Renaissance Italy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Victorian England
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Prehistoric Era
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-luxury-gold">
                            Company
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Safety Standards
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-luxury-gold transition-colors"
                                >
                                    Press
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-luxury-gold">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-luxury-gold" />
                                +1 (555) TIME-001
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-luxury-gold" />
                                travel@timeagency.com
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-luxury-gold mt-0.5" />
                                <span>
                                    Temporal Plaza, New York
                                    <br />
                                    NY 10001, USA
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-luxury-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>
                        © 2026 TimeTravel Agency. All temporal rights
                        reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="#"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-luxury-gold transition-colors"
                        >
                            Temporal Compliance
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
