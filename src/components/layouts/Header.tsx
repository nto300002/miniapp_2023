import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bg-blue-400 text-white w-full">
      <h1 className="text-xl md:text-4xl">青春（あの頃に帰りたい）シューティング</h1>
      <p className="mr-4 text-xl"><Link to="/">TOP</Link></p>
      <p className="text-xl"><Link to="/game">START</Link></p>
    </div>
  )
}
