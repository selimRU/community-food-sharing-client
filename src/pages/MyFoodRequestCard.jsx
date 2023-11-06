'use client';

import { Card } from 'flowbite-react';

const MyFoodRequestCard = () => {
    return (
        <Card className="max-w-sm" imgSrc="https://i.postimg.cc/K8YPVJHP/329583300-950998439150256-6260665216662671507-n.jpg" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
    );
};

export default MyFoodRequestCard;