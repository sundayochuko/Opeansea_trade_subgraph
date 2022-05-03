// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("hash", Value.fromBytes(Bytes.empty()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
    this.set("addressFrom", Value.fromString(""));
    this.set("addressTo", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value!.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get addressFrom(): string {
    let value = this.get("addressFrom");
    return value!.toString();
  }

  set addressFrom(value: string) {
    this.set("addressFrom", Value.fromString(value));
  }

  get addressTo(): string {
    let value = this.get("addressTo");
    return value!.toString();
  }

  set addressTo(value: string) {
    this.set("addressTo", Value.fromString(value));
  }
}
