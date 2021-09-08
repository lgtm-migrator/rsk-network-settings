import { NetworkUpgradesActivationHeights } from './network-activation-heights';
import { NetworkUpgrades } from '../enums/network-upgrades';
export declare class Mainnet implements NetworkUpgradesActivationHeights {
    getActivationHeight(networkUpgrade: NetworkUpgrades): number;
}
