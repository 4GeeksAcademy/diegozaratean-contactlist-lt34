import React, {useContext} from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {

	const { actions } = useContext(Context)

	function changeTitle(){
		console.log('changeTitle')
		actions.changeMessage()
	}


	return(
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<button onClick={actions.changeMessage} >Cambiar saludo</button>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	);
} 