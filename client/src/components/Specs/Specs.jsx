import style from "../Specs/Specs.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import SpecItem from "../SpecItem/SpecItem";
import Spinner from "../Spinner/Spinner";


export default function Specs() {
    const api_key = 'd03lKjwNUmC3aDNnh8bK9Q==crNTneiJ1KbCnonD';

    const [specs, setSpecs] = useState({});
    const { brandmodel } = useParams();

    const make = brandmodel.split(':')[0]
    const model = brandmodel.split(':')[1]

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/motorcycles?make=${make}&model=${model}`, {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': api_key,
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                setSpecs(Object.values(result))

            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div className={style.specsItemWrapper}>
            <ul>

                {specs?.length > 0
                    ? <SpecItem key={`${specs.torque}+${specs.emission}`} spec={specs} />
                    : <Spinner></Spinner>
                }

            </ul>
        </div>
    );
}

