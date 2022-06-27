/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaSwatchbook } from 'react-icons/fa';

function Theme() {
    return (
        <div className="dropdown-end dropdown">
            <label tabIndex="0" className="btn btn-ghost space-x-2 shadow-md">
                <FaSwatchbook />
            </label>
            <ul
                className="scrollbar dropdown-content menu rounded-box menu-compact mt-4 h-64 overflow-y-scroll bg-base-100 uppercase shadow"
                tabIndex="0"
            >
                <li>
                    <button
                        type="button"
                        data-set-theme=""
                        data-act-class="active"
                        className="active"
                    >
                        Default
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="light" data-act-class="active">
                        Light
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="dark" data-act-class="active">
                        Dark
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="cupcake" data-act-class="active">
                        Cupcake
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="bumblebee" data-act-class="active">
                        Bumblebee
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="emerald" data-act-class="active">
                        Emerald
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="corporate" data-act-class="active">
                        Corporate
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="synthwave" data-act-class="active">
                        Synthwave
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="retro" data-act-class="active">
                        Retro
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="cyberpunk" data-act-class="active">
                        Cyberpunk
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="valentine" data-act-class="active">
                        Valentine
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="halloween" data-act-class="active">
                        Halloween
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="garden" data-act-class="active">
                        Garden
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="forest" data-act-class="active">
                        Forest
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="aqua" data-act-class="active">
                        Aqua
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="lofi" data-act-class="active">
                        Lofi
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="pastel" data-act-class="active">
                        Pastel
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="fantasy" data-act-class="active">
                        Fantasy
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="wireframe" data-act-class="active">
                        Wireframe
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="black" data-act-class="active">
                        Black
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="luxury" data-act-class="active">
                        Luxury
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="dracula" data-act-class="active">
                        Dracula
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="cmyk" data-act-class="active">
                        CMYK
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="autumn" data-act-class="active">
                        Autumn
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="business" data-act-class="active">
                        Business
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="acid" data-act-class="active">
                        Acid
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="lemonade" data-act-class="active">
                        Lemonade
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="night" data-act-class="active">
                        Night
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="coffee" data-act-class="active">
                        Coffee
                    </button>
                </li>
                <li>
                    <button type="button" data-set-theme="winter" data-act-class="active">
                        Winter
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Theme;
