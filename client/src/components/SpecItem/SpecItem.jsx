import uniqid from 'uniqid'
import style from '../SpecItem/SpecItem.module.css';


export default function SpecItem(props) {
    console.log(props.spec[0])

    const moto = props.spec[0];

    return (
        <div className={style.specContainer}>
            <ul className={style.specItemsWrapper}>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Make: </span> {moto.make}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Model: </span> {moto.model}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Year: </span> {moto.year}</li>
                <br />

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Type: </span> {moto.type}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Bore_stroke: </span> {moto.bore_stroke}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Clutch: </span> {moto.clutch}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Compression: </span> {moto.compression}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Cooling: </span> {moto.cooling}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Displacement: </span> {moto.displacement}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Emission: </span> {moto.emission}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Engine: </span> {moto.engine}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Frame: </span> {moto.frame}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Front_brakes: </span> {moto.front_brakes}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Front_suspension: </span> {moto.front_suspension}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Front_tire: </span> {moto.front_tire}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Front_wheel_travel: </span> {moto.front_wheel_travel}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Fuel_capacity: </span> {moto.fuel_capacity}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Fuel_consumption: </span> {moto.fuel_consumption}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Fuel_control: </span> {moto.fuel_control}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Fuel_system: </span> {moto.fuel_system}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Gearbox: </span> {moto.gearbox}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Ground_clearance: </span> {moto.ground_clearance}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Ignition: </span> {moto.ignition}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Rear_brakes: </span> {moto.rear_brakes}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Rear_suspension: </span> {moto.rear_suspension}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Rear_tire: </span> {moto.rear_tire}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Rear_wheel_travel: </span> {moto.rear_wheel_travel}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Seat_height: </span> {moto.seat_height}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Starter: </span> {moto.starter}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Total_height: </span> {moto.total_height}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Total_length: </span> {moto.total_length}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Total_weight: </span> {moto.total_weight}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Total_width: </span> {moto.total_width}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Transmission: </span> {moto.transmission}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Valves_per_cylinder: </span> {moto.valves_per_cylinder}</li>

                <li key={uniqid()}>
                    <span className={style.specItemLi}> Wheelbase: </span> {moto.wheelbase}</li>

            </ul>
        </div>
    );
}





































