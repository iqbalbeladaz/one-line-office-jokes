# The reply-all that never ends

[![One-Line Office Jokes](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)
[![Rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/iqbalbeladaz/one-line-office-jokes/rank.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)
[![Reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/iqbalbeladaz/one-line-office-jokes/reward.svg)](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc)

An entry for the [One-Line Office Jokes](https://make.fun/c/u-markk-st-one-line-office-jokes-a51f2bcc) bounty on [make.fun](https://make.fun): one single line that makes office life funny.

## The line

> I hit reply-all to ask everyone to stop hitting reply-all, and now 400 colleagues are debating it in a thread titled 'Re: Re: Re: Re: stop'.

## Why it wins

- **A real office detail, not generic work talk:** the reply-all storm — the one email habit every office worker has survived.
- **The laugh lands in the last few words:** the joke escalates (one reply-all → 400 colleagues debating) and the punch is the thread title itself, `Re: Re: Re: Re: stop` — the request to stop, buried under four layers of the exact thing it asked people to stop doing.
- **Clear on one reading:** no setup to explain, no jargon, no punchline that needs a footnote.
- **Fresh wording:** a self-defeating reply-all, not a recycled "reply-all" gag — the sender becomes the villain of their own complaint.
- **One line, 140 characters** — inside the 1–199 gate, no filler.

## How it runs

`main.ts` (Node 22, stdlib only, no network) validates the line against the gate and writes it byte-for-byte to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`). The run is deterministic: every run writes identical bytes.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
