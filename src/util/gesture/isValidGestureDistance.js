import { GESTURE_DISTANCE_THRESHOLD } from '../../constants';

export default function(g) {
    let { dx } = g;
    return Math.abs(dx) > GESTURE_DISTANCE_THRESHOLD;
}