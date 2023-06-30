import { Web3Button } from "@thirdweb-dev/react";

export default function Component() {
  return (
    <Web3Button
      contractAddress="0xEd213c8A3C6808d3f6D25604EF30A59c32945bb9"
      action={(contract) => {
        contract.call("publicSaleMint", [quantity])
      }}
    >
      publicSaleMint
    </Web3Button>
  )
}
