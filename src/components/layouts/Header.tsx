import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bg-blue-400 text-white w-full text-center text-shadow pb-7">
      <h1 className="text-xl md:text-4xl mb-7">青春（あの頃に帰りたい）シューティング</h1>
        <span className="mr-4 text-xl hover:text-red-300"><Link to="/">TOP</Link></span>
        <span className="text-xl hover:text-red-300"><Link to="/game">START</Link></span>
    </div>
  )
}
