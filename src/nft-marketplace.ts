import { BigInt } from "@graphprotocol/graph-ts"
import {
  NFTMarketplace,
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent
} from "../generated/NFTMarketplace/NFTMarketplace"

export function handleItemBought(event: ItemBoughtEvent): void {
  
}

export function handleItemCanceled(event: ItemCanceledEvent): void {}

export function handleItemListed(event: ItemListedEvent): void {}
