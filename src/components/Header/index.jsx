import { BsBasket } from 'react-icons/bs';
import { IoRestaurant } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  // useselector ile reducardaki statelere eriş
  const {restaurants} = useSelector((state) => state.restaurantReducers);
  const {cart} = useSelector((state) => state.cartReducer);

  // sepetteki toplam ürün miktarını hesapla
  const totalAmount = cart.reduce((total, i) => total+ i.amount, 0);

  return (
  <header className='shadow'>
    <div className='max-w-[1440px] mx-auto p-5 lg:p-8 flex items-center justify-between'>
        {/* logo */}
        <Link to="/" className='text-red-500 font-[900] text-2xl font-mono md:text-3xl'>ThunkSepeti</Link>
    <div className='flex gap-5'>
        <Link to="/" className='flex items-center gap-1 hover:underline cursor-pointer'>Yakınınızda<span>{restaurants.length}</span><IoRestaurant className='text-red-500'/> <span className='max-md:hidden'>Restaurant Var</span> </Link>
        
        <button className='text-red-500 p-3 hover:bg-red-400 border py-1 px-3 rounded hover:text-white transition max-md:hidden'>Giriş Yap</button>
        <button className='text-red-500 p-3 hover:bg-red-400 border py-1 px-3 rounded hover:text-white transition max-md:hidden'>Kayıt Ol</button>

        <Link to="/cart" className='flex items-center gap-2 py-2 px-3 hover:bg-red-100 rounded-full'><BsBasket/><span>{totalAmount} </span></Link>
    </div>
    </div>
  </header>
  )
}

export default Header;
