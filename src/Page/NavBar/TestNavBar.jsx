import { Link, NavLink } from "react-router-dom";
import '../../Layout/style/style.css'
import { HiHeart } from "react-icons/hi2";
import { BiSearchAlt, BiShoppingBag } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
const TestNavBar = () => {
    return (
        <div>

            <header id="nav-header">

                <div id="contact-nav">

                </div>

                <div className="navigation-container">

                <nav className="navigation max-w-6xl mx-auto">
                    <div>
                        <h1 className="text-xl font-bold z-50">.Nshoes</h1>
                    </div>
                    <div id="nav-links">
                        <li><NavLink className={'ankor'} to={'/'}>Home</NavLink></li>
                        <li><NavLink className={'ankor'} to={'/'}>New Arrival</NavLink></li>
                        <li><NavLink className={'ankor'} to={'/'}>Women</NavLink></li>
                        <li><NavLink className={'ankor ankorMen'} to={'/men'}>Men

                            <div className="menChild h-[220x] w-[100%] bg-slate-600 absolute left-0 animate__animated animate__backInDown">
                                <div id="firs-child" className="flex flex-col">
                                    <h5> <Link className="firstChildLink" to={'/bestseller'} > Best Seller </Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/trending'} >  What{`'`}s Trending</Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/bestseller'} > Best Seller</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/livealifestyle'} > Live a Lifestyle</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/heelhighlights'} >Heel Highlights </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > The Summer Collection</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Products Under 1000</Link> </h5>
                                </div>
                                <div id="second-child" className="flex flex-col">
                                    <h5> <Link className="firstChildLink" to={'/'} > Footwear </Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Formal Shoes</Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Casual Shoes</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Boots</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Canvas </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Sports Shoes</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Sandals</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Sports Sandals</Link> </h5>
                                </div>
                                <div id="third-child" className="flex flex-col">
                                    <h5> <Link className="firstChildLink" to={'/'} > Clothing </Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > T-Shirts</Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Casual Shirts</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Polo Shirts</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Shorts </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Casual Pants</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Chinos</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Denim</Link> </h5>
                                </div>
                                <div id="fourth-child" className="flex flex-col">
                                    <h5> <Link className="firstChildLink" to={'/'} > Accessories </Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Bags</Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Belts</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Wallets</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Shorts </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Casual Pants</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Chinos</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Denim</Link> </h5>
                                </div>
                                <div id="five-child" className="flex flex-col">
                                    <h5> <Link className="firstChildLink" to={'/'} > Venturini </Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Clarks</Link></h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Asics</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Adidas </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Maverick </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Apex </Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Dr. Mauch</Link> </h5>
                                    <h5> <Link className="firstChildLink" to={'/'} > Sprint</Link> </h5>
                                </div>
                            </div>
                        </NavLink></li>
                        <li><NavLink className={'ankor'} to={'/'}>Kids</NavLink></li>
                        <li><NavLink className={'ankor'} to={'/'}>Gift Voucher</NavLink></li>
                    </div>

                    <div id="nav-icons">
                        <BiSearchAlt></BiSearchAlt>
                        <HiHeart></HiHeart>
                        <BiShoppingBag></BiShoppingBag>
                        <IoIosContact />
                    </div>

                </nav>
                </div>

            </header>

        </div>
    );
};

export default TestNavBar;












// test 1

// import { NavLink } from "react-router-dom";
// import '../../Layout/style/style.css'
// import { HiHeart } from "react-icons/hi2";
// import { BiSearchAlt, BiShoppingBag } from "react-icons/bi";
// import { IoIosContact } from "react-icons/io";
// const TestNavBar = () => {
//     return (
//         <div>

//             <header id="nav-header">

//                 <div id="contact-nav">

//                 </div>

//                 <nav className="navigation">

//                     <div>
//                         <h1 className="text-xl font-bold z-50">.Nshoes</h1>
//                     </div>

//                     <div id="nav-links">
//                         <li><NavLink className={'ankor'} to={'/'}>Home</NavLink></li>
//                         <li><NavLink className={'ankor'} to={'/'}>New Arrival</NavLink></li>
//                         <li><NavLink className={'ankor'} to={'/'}>Women</NavLink></li>
//                         <li><NavLink className={'ankor ankorMen'} to={'/men'}>Men

//                             <aside className="menChild h-[220x] w-[100%] bg-slate-600 absolute left-0 animate__animated animate__backInDown">
//                             </aside>
//                         </NavLink></li>
//                         <li><NavLink className={'ankor'} to={'/'}>Kids</NavLink></li>
//                         <li><NavLink className={'ankor'} to={'/'}>Gift Voucher</NavLink></li>
//                     </div>

//                     <div id="nav-icons">
//                         <BiSearchAlt></BiSearchAlt>
//                         <HiHeart></HiHeart>
//                         <BiShoppingBag></BiShoppingBag>
//                         <IoIosContact />
//                     </div>

//                 </nav>


//             </header>

//         </div>
//     );
// };

// export default TestNavBar;




