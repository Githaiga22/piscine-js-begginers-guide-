// Define the hashCode function as provided
const hashCode = str =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36);

// Define the blockChain function
const blockChain = (data, prev = { index: 0, hash: '0' }) => {
    // Calculate the index of the current block
    const index = prev.index + 1;

    // Stringify the data
    const stringifiedData = JSON.stringify(data);

    // Calculate the hash for the current block
    const hash = hashCode(`${index}${prev.hash}${stringifiedData}`);

    // Define the block
    const block = {
        index,      // Block index
        hash,       // Block hash
        data,       // Block data
        prev,       // Previous block reference
        chain(nextData) {
            // Function to create the next block in the chain
            return blockChain(nextData, this);
        }
    };

    // Return the current block
    return block;
};

// Test the blockChain function
const first = blockChain({ a: 1 });
console.log(first.index); // -> 1
console.log(first.data);  // -> { a: 1 }
console.log(first.prev);  // -> { index: 0, hash: "0" }
console.log(first.hash);  // -> '1103f27'
console.log(hashCode('10{"a":1}')); // -> '1103f27'

const second = first.chain({ hello: 'world' });
console.log(second.hash); // -> '18drvvc'
console.log(hashCode('21103f27{"hello":"world"}')); // -> '18drvvc'

const chain = second
  .chain({ value: 4455 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' });

const fork = second
  .chain({ value: 335 })
  .chain({ some: 'data' })
  .chain({ cool: 'stuff' });

console.log(chain.hash);  // -> '1qr3qfs'
console.log(fork.hash);   // -> '1x9gsc1'
console.log(chain.index); // -> 5
console.log(fork.index);  // -> 5
