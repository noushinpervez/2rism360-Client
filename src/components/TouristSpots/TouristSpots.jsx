import { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const TouristSpots = () => {
    const [touristSpot, setTouristSpot] = useState([]);

    useEffect(() => {
        fetch(`https://tourist-spot-server-nu.vercel.app/tourist-spot`)
            .then(res => res.json())
            .then(data => {
                setTouristSpot(data);
            })
    }, []);

    return (
        <section className="py-20 bg-background">
            <h3 className="text-2xl text-center mb-6">Tourists Spots</h3>
            <div className="flex flex-wrap container justify-center items-center mx-auto gap-6 lg:p-0 px-6">
                {
                    touristSpot.map(touristSpot => (
                        <Card key={ touristSpot._id } className="mt-6 w-96">
                            <div className="h-56">
                                <img
                                    src={touristSpot.image}
                                    alt={ touristSpot.tourist_spot_name }
                                    className="object-cover object-center h-56 w-full rounded-t-xl"
                                />
                            </div>
                            <CardBody>
                                <h3 className="mb-2 text-xl">
                                    { touristSpot.tourist_spot_name }
                                </h3>
                                <Typography>
                                    The place is close to Barceloneta Beach and bus stop just 2 min by
                                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                                    night life in Barcelona.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button>Read More</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </section>
    );
};

export default TouristSpots;