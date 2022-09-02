// Code your solution in this file!

function distanceFromHqInBlocks(distanceInBlocks){
    if (distanceInBlocks > 42)
    return (distanceInBlocks - 42)
    else if (distanceInBlocks < 42)
    return (42 - distanceInBlocks)
}


function distanceFromHqInFeet(distanceInBlocks){
    if (distanceInBlocks > 42)
    return ((distanceInBlocks - 42) * 264)
    else if (distanceInBlocks < 42)
    return ((42 - distanceInBlocks)* 264)

}

function distanceTravelledInFeet(block1, block2){
if (block1 < block2)
return ((block2 - block1) * 264)
else if (block2 < block1)
return ((block1 - block2) * 264)
}

function calculatesFarePrice(block1, block2){

let feet = distanceTravelledInFeet(block1, block2)

if (feet < 400)
return (0)

    else if ((feet >= 400) && (feet <= 2000))
    return ((feet - 400) * .02)

        else if ((feet > 2000) && (feet <= 2500))
        return (25)

            else if (feet > 2500)
           return ('cannot travel that far')
}