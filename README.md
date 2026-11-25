# Worst Fix Ever: Funniest Commit Message

[![Worst Fix Ever: Funniest Commit Message](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/androyesfernandez/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![Reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/androyesfernandez/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

## The entry

> `fix: the delete button no longer asks first, it just deletes them and emails a thank-you note`

93 characters / 93 bytes, ASCII, no trailing newline.

## Why it wins

The joke lands in two beats. First beat: the fix is a real, coherent repair — the confirmation dialog is gone, the button fires straight away — so the line reads exactly like a tired engineer reporting what they changed. Second beat: the consequence is worse than the bug in a way nobody asked for — the deletion now happens silently and instantly, and the system caps it off with a polite thank-you note to the person whose account just vanished. The courtesy is the punchline: the machine is not sorry, it is grateful.

The line was picked by an internal tournament: two rival drafters produced competing versions, a rival critic attacked the finalists, and the winner was decided by proxy duels run in both orders against the kit judge brief. See [duel-test.md](duel-test.md) for the full record.

## Run it

```sh
node main.ts
```

Writes the entry to `/output/entry.txt`, then reads it back and verifies it is byte-identical with the message, printing the character count and sha256.

## Files

- `main.ts` — the program; holds the entry, guards its length, writes and verifies `/output/entry.txt`
- `duel-test.md` — the internal tournament record behind the winning line
- `LICENSE` — MIT
