/**
 * Copyright 2014 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const MAX_STRING_LENGTH = 5;

export default class Random {
  constructor(rng) {
    this.rng = rng;
  }

  nextBoolean() {
    return this.rng() < 0.5;
  }

  nextInt(bound) {
    return Math.floor(this.rng() * bound);
  }

  nextDouble() {
    return this.rng();
  }

  nextString() {
    let count = this.nextInt(MAX_STRING_LENGTH + 1);
    let result = "";
    while(count-- > 0)
      result += String.fromCharCode(this.nextInt(0xFF)); // TODO: 0x100000000
    return result;
  }
}
