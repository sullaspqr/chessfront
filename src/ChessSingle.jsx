import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export const ChessSingle = () => {
    const params = useParams();
    const id = params.chessId;
    const [chess, setChess] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const sakkok = await axios.get("https://chess.sulla.hu/chess/" + id);
                setChess(sakkok.data);
            }
            catch (error) {
                console.log("hiba: ", error);
            }
        })();
    }, [id]);

    return (
        <div className="container mt-5">
            <h2 className="text-center">Sakkozó</h2>
            <div className="card h-100">
                <p className="text-dark text-center">Sakkozó neve: {chess.name}</p>
                <p className="text-dark text-center">Születési éve: {chess.birth_date}</p>
                <p className="text-dark text-center">Megnyert világbajnokságai: 
                    {chess.world_ch_won}</p>
                <div className="card-body d-flex flex-column align-items-center">
                    <Link to={chess.profile_url} className="fs-6" target="_blank">
                    Profil link</Link><br />
                    <Link key={chess.id} to={"/chess/" + chess.id}>
                    <img src={chess.image_url ? chess.image_url : 
                        "https://via.placeholder.com/400x800"} alt={chess.name} 
                        className="img-fluid" style={{width: "200px"}}/></Link>
                   </div><br />
                   <div className="text-center"><Link to="/">
                   <i className="bi bi-backspace-fill"></i></Link> </div>
                </div>
                </div>);
}