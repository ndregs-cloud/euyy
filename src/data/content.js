/* ==========================================================================
   Margin · Editorial content
   --------------------------------------------------------------------------
   Stand-in content for the prototype: writers, topics, and stories. Bodies
   support a small inline markup subset rendered by components/Inline.jsx:
     **strong**   *emphasis*   [label](/path or https://…)
   Block types: p | h2 | quote | list | figure | rule
   ========================================================================== */

export const authors = [
  {
    handle: 'nadia',
    name: 'Nadia Raharjo',
    bio: 'Reporter on cities, transit, and who gets to live where. I write the long version of what I could not fit in the story.',
    longBio: [
      'I cover housing, transit, and the slow politics of infrastructure — the parts of a city that decide, decades in advance, whose life will be convenient and whose will be a commute.',
      'Before this I spent six years at a regional daily, mostly at planning hearings, mostly alone. I write here because the argument deserves more room than a news column allows.',
    ],
    location: 'Jakarta, Indonesia',
    followers: 18400,
    following: 312,
    joined: 'March 2019',
    avatarTone: 0,
  },
  {
    handle: 'tomas',
    name: 'Tomás Ferrer',
    bio: 'Essays on attention, tools, and the quiet economics of software. Recovering optimiser.',
    longBio: [
      'I write essays about attention: how it is measured, sold, and spent. Most of my work starts as a note to myself about something I keep doing wrong.',
      'I spent a decade building recommendation systems and now spend most of my time explaining why I would not build them again the same way.',
    ],
    location: 'Lisbon, Portugal',
    followers: 42100,
    following: 188,
    joined: 'August 2016',
    avatarTone: 1,
  },
  {
    handle: 'amy',
    name: 'Amy Lindqvist',
    bio: 'Science writer. Mostly sleep, mostly seabirds, occasionally both at once.',
    longBio: [
      'I translate field research for people who will never wear a headlamp at 3 a.m. — circadian biology, migration, and the unglamorous logistics of counting animals in the dark.',
      'My rule: if the study is boring, the write-up has to be beautiful, or at least honest.',
    ],
    location: 'Uppsala, Sweden',
    followers: 9600,
    following: 540,
    joined: 'January 2021',
    avatarTone: 2,
  },
  {
    handle: 'devin',
    name: 'Devin Okafor',
    bio: 'Engineer writing about software craft, maintenance, and the parts of the job nobody demos.',
    longBio: [
      'I have shipped three products and deleted two of them. I write about maintenance work — the kind that never makes a launch post but decides whether the thing survives.',
      'Currently interested in boring technology, upgrade paths, and the ethics of code you cannot delete.',
    ],
    location: 'Lagos, Nigeria',
    followers: 27300,
    following: 96,
    joined: 'June 2018',
    avatarTone: 3,
  },
  {
    handle: 'miriam',
    name: 'Miriam Cole',
    bio: 'Culture critic. I read the footnotes so you can read the review.',
    longBio: [
      'I write about books, museums, and the strange afterlife of taste — why certain work is rescued and certain work is quietly allowed to disappear.',
      'Previously a copy editor, which is why I have opinions about em dashes and will share them.',
    ],
    location: 'Chicago, USA',
    followers: 15800,
    following: 721,
    joined: 'November 2020',
    avatarTone: 4,
  },
]

export const topics = [
  {
    slug: 'technology',
    name: 'Technology',
    blurb:
      'What the tools do to us, and what we do back. Systems, software, and the people maintaining both.',
    followers: 2140000,
  },
  {
    slug: 'writing',
    name: 'Writing',
    blurb:
      'Craft, habit, and the honest difficulty of making a first draft survive contact with a reader.',
    followers: 1360000,
  },
  {
    slug: 'cities',
    name: 'Cities',
    blurb:
      'Housing, transit, and the long arguments about who a place is actually built for.',
    followers: 486000,
  },
  {
    slug: 'science',
    name: 'Science',
    blurb:
      'Field notes, findings, and the unglamorous logistics of knowing something for certain.',
    followers: 1980000,
  },
  {
    slug: 'culture',
    name: 'Culture',
    blurb: 'Books, museums, music, and the strange afterlife of taste.',
    followers: 1120000,
  },
  {
    slug: 'work',
    name: 'Work',
    blurb:
      'Careers, craft, and the economics of attention in a job that never quite ends.',
    followers: 894000,
  },
  {
    slug: 'design',
    name: 'Design',
    blurb:
      'Typography, restraint, and the discipline of removing things until only the point remains.',
    followers: 1450000,
  },
]

export const stories = [
  {
    slug: 'the-quiet-cost-of-a-fast-city',
    title: 'The quiet cost of a fast city',
    dek: 'We built the express line for the people who already had options. Six years later, the neighbourhoods it skipped are still waiting for a bus.',
    author: 'nadia',
    topic: 'cities',
    date: '2026-10-09',
    readTime: 9,
    claps: 2410,
    responses: 68,
    memberOnly: true,
    cover: 3,
    trending: 1,
    body: [
      {
        type: 'p',
        text: 'The ribbon-cutting lasted eleven minutes. I timed it, because the ceremony was the only part of the project anyone had planned down to the second. After the speeches, the first train left with a full carriage of officials and a half-empty carriage of people who had queued since six in the morning to ride it.',
      },
      {
        type: 'p',
        text: 'Six years on, that line moves 180,000 people a day and is universally described as a success. It is also the clearest example I have of how a city can spend a fortune on speed and distribute it unevenly enough to change who the city belongs to.',
      },
      { type: 'h2', text: 'Speed is a subsidy' },
      {
        type: 'p',
        text: 'We talk about transit in terms of coverage and ridership, but the number that actually shapes a life is door-to-door minutes. A forty-minute saving, five days a week, is not a convenience. It is a reallocation of **roughly three weeks a year** from commuting back to the person doing the commuting — to sleep, to a second job, to a child, to nothing at all.',
      },
      {
        type: 'p',
        text: 'When a city spends capital to create that time, it is handing out an asset. The only question is who receives it. Express rail with wide station spacing hands it to people who live near a small number of expensive nodes. A frequent bus network with ugly, unglamorous stop spacing hands it to everyone within walking distance of a main road.',
      },
      {
        type: 'quote',
        text: 'Nobody campaigns on stop spacing. It is the single most consequential decision in a transit network and it never appears on a poster.',
      },
      {
        type: 'p',
        text: 'The corridor the express line skipped runs parallel to it, two kilometres east, and carries more daily trips than the line did in its first year. It is served by three bus routes whose headways were quietly lengthened in 2023 to pay for the line’s operating shortfall. That trade is invisible on a map. It is very visible at 6:40 in the morning, when the bus that used to come every eight minutes comes every nineteen.',
      },
      { type: 'figure', cover: 1, caption: 'The eastern corridor, where three routes absorbed the shortfall.' },
      { type: 'h2', text: 'What the numbers hide' },
      {
        type: 'p',
        text: 'Ridership reports answer a question nobody is really asking: *how many people used the thing we built?* The useful question is comparative — what would the same money have bought if it had been spent on the network that already existed?',
      },
      {
        type: 'list',
        items: [
          'The express line cost about $1.9bn over nine years, including land acquisition.',
          'A ten-year programme of dedicated bus lanes on the four highest-ridership corridors was costed at $210m and shelved twice.',
          'The shelved programme would have cut door-to-door time for an estimated 340,000 daily trips. The line cut it for 180,000.',
        ],
      },
      {
        type: 'p',
        text: 'I am not arguing against rail. Rail is durable, legible, and politically survivable in a way that a painted lane is not — which is precisely why it wins. The argument is about the ordering. A city that spends on the legible project before the effective one will keep producing maps that look ambitious and commutes that do not improve.',
      },
      { type: 'h2', text: 'The maintenance question' },
      {
        type: 'p',
        text: 'There is a second, slower cost, and it lands on the people who operate the network rather than the people who ride it. Since 2023 the eastern depot has run with a **22 per cent vacancy rate** in drivers, because the scheduling software procurement was deferred to fund the line’s signalling upgrade. Vacancies become overtime; overtime becomes fatigue; fatigue becomes the service cuts that get described, in official documents, as demand-responsive adjustments.',
      },
      {
        type: 'p',
        text: 'Every paragraph of that sentence is a decision somebody made, and none of them were made at a ribbon-cutting. That is the part I keep coming back to: the ceremony is eleven minutes and the consequences are decades, and we have built our politics so that only the eleven minutes are visible.',
      },
      { type: 'rule' },
      {
        type: 'p',
        text: 'If you want to know what your city values, do not read its transport plan. Stand at a stop on the corridor the plan skipped, at 6:40 on a Tuesday, and count.',
      },
    ],
  },
  {
    slug: 'you-do-not-need-a-better-note-app',
    title: 'You do not need a better note app',
    dek: 'Every productivity system I abandoned failed for the same reason: it optimised capture, and capture was never my problem.',
    author: 'tomas',
    topic: 'writing',
    date: '2026-10-06',
    readTime: 7,
    claps: 5820,
    responses: 214,
    memberOnly: false,
    cover: 4,
    trending: 2,
    body: [
      {
        type: 'p',
        text: 'I have rebuilt my notes eleven times. Plain text folders, a wiki, a database with eleven custom fields, a graph view that looked like a constellation and told me nothing. Each rebuild felt like progress and each one ended the same way: three weeks of enthusiasm, then a slow drift back to writing things on the back of envelopes.',
      },
      {
        type: 'p',
        text: 'It took me a long time to notice that the drift was not a failure of discipline. It was the system telling me something true — that I do not have a capture problem.',
      },
      { type: 'h2', text: 'Capture is cheap now' },
      {
        type: 'p',
        text: 'Capturing an idea costs almost nothing. Phones, voice memos, screenshots, tabs, a paper napkin. The bottleneck has moved somewhere else entirely, and almost every note app is still optimising the part that got solved a decade ago.',
      },
      {
        type: 'quote',
        text: 'A note you never return to is not memory. It is a receipt.',
      },
      {
        type: 'p',
        text: 'What is actually hard is *retrieval by need* — finding the right thing at the moment you are making a decision, without having predicted in advance that you would need it. Tagging does not solve this. Search does not solve it. Backlinks help a little, and mostly they make it easier to admire the structure you built instead of using it.',
      },
      { type: 'h2', text: 'The only three questions' },
      {
        type: 'p',
        text: 'When I stopped designing systems and started asking questions, the whole thing collapsed into something embarrassingly small:',
      },
      {
        type: 'list',
        items: [
          'What am I working on right now? Not someday — this month.',
          'What did I already decide about this, and why?',
          'What is the next physical action?',
        ],
      },
      {
        type: 'p',
        text: 'Two files answer all three: one for the current project, one running log of decisions. Everything else is archive, and archive only needs to be searchable, which is a solved problem I should stop trying to solve again.',
      },
      { type: 'figure', cover: 0, caption: 'Eleven systems, one of which I still open.' },
      { type: 'h2', text: 'Why the rebuild feels good' },
      {
        type: 'p',
        text: 'Rebuilding a note system is the most socially acceptable form of procrastination available to a person who works with their head. It produces visible artefacts. It has a completion state. It rewards you immediately, in a way that thinking about a hard problem does not.',
      },
      {
        type: 'p',
        text: 'That is the tell. If a task always feels productive and never produces anything, it is not a system — it is a **mood**, and the mood is avoidance wearing a very convincing costume.',
      },
      {
        type: 'p',
        text: 'So: keep the boring folder. Write the ugly first line. The app was never the reason the draft is empty.',
      },
    ],
  },
  {
    slug: 'what-seabirds-know-about-sleep',
    title: 'What seabirds know about sleep',
    dek: 'A frigatebird can sleep for months mid-flight, one hemisphere at a time. The mechanism is stranger — and more relevant to us — than the headline suggests.',
    author: 'amy',
    topic: 'science',
    date: '2026-10-02',
    readTime: 11,
    claps: 3190,
    responses: 92,
    memberOnly: true,
    cover: 2,
    trending: 3,
    body: [
      {
        type: 'p',
        text: 'The recording rig weighs about as much as a AA battery and has to be glued to the head of a bird that will not, at any point, consent to the procedure. Everything in seabird neuroscience begins with an awkward negotiation between an animal and a technician on a rock in the middle of an ocean.',
      },
      {
        type: 'p',
        text: 'What those rigs recorded, over months of continuous flight, forced a rewrite of what sleep is *for*.',
      },
      { type: 'h2', text: 'Sleep without landing' },
      {
        type: 'p',
        text: 'Great frigatebirds can stay airborne for weeks. During that time they sleep — but in bursts averaging under a second, mostly while circling in rising air, and overwhelmingly with one hemisphere at a time. Total sleep in flight comes to a fraction of what the same birds get on land.',
      },
      {
        type: 'quote',
        text: 'The bird does not skip sleep. It renegotiates the terms, and pays for it later, on the ground, in long unbroken bouts.',
      },
      {
        type: 'p',
        text: 'The debt is real. On returning to the colony, birds sleep far more than their land-bound baseline. This is the part that gets left out of the headline: the ability to sleep in flight is not a superpower, it is an **emergency protocol** with an invoice attached.',
      },
      { type: 'figure', cover: 5, caption: 'Circling in thermals: the only phase of flight where sleep is safe.' },
      { type: 'h2', text: 'Why one hemisphere' },
      {
        type: 'p',
        text: 'Unihemispheric sleep shows up wherever an animal cannot afford to stop: dolphins, some ducks, migrating songbirds. In ducks sleeping in a row, the birds on the outside keep the eye facing away from the group open — literally keeping one half of the brain on watch.',
      },
      {
        type: 'list',
        items: [
          'The awake hemisphere maintains postural control and visual monitoring.',
          'The sleeping hemisphere shows slow-wave activity comparable to full sleep.',
          'Birds can bias which hemisphere sleeps depending on perceived risk.',
        ],
      },
      {
        type: 'p',
        text: 'Which raises an uncomfortable question for a species that considers eight continuous hours normal: is *whole-brain* sleep a biological requirement, or a behavioural luxury that only safe animals can afford?',
      },
      { type: 'h2', text: 'The human translation' },
      {
        type: 'p',
        text: 'We do not have unihemispheric sleep, and we should not wish for it. But the frigatebird data is useful to us in a narrower way — it separates two things we usually fuse: the **need** for sleep, and the **opportunity** for it.',
      },
      {
        type: 'p',
        text: 'Frigatebirds under sleep pressure do not stop needing sleep; they lose the conditions for it, and then pay a measurable debt. Shift workers, new parents, and people in the middle of a long project are not biologically different. They are in the same position as a bird that cannot land — and the debt behaves the same way, whether it is repaid in a week or in a decade.',
      },
      {
        type: 'p',
        text: 'The research is not a permission slip to sleep less. It is a warning about how the bill arrives: not as one dramatic failure, but as a long series of one-second compromises that never look like a decision at the time.',
      },
    ],
  },
  {
    slug: 'in-praise-of-boring-infrastructure',
    title: 'In praise of boring infrastructure',
    dek: 'The best dependency I have ever shipped was one nobody noticed. A defence of the unglamorous middle of software.',
    author: 'devin',
    topic: 'technology',
    date: '2026-09-28',
    readTime: 8,
    claps: 4260,
    responses: 141,
    memberOnly: false,
    cover: 1,
    trending: 4,
    body: [
      {
        type: 'p',
        text: 'In eleven years I have been on call for two systems I loved and one I still think about weekly. The one I think about is a queue. It had no dashboard worth the name, its admin interface was a table, and for four years its most significant incident was a certificate expiring on a Sunday.',
      },
      {
        type: 'p',
        text: 'It processed about 9 million jobs a day. Nobody at the company could tell you how it worked, which was the highest compliment available.',
      },
      { type: 'h2', text: 'Boring is a design property' },
      {
        type: 'p',
        text: 'We use “boring” as an insult and “elegant” as praise, but in infrastructure the two are close to the same thing. Boring means the failure modes are enumerable. It means a new hire can hold the whole system in their head during their first week, which is the actual prerequisite for anyone being able to fix it at 3 a.m.',
      },
      {
        type: 'quote',
        text: 'The measure of infrastructure is not what it does when it works. It is how much context a stranger needs before they can restore it.',
      },
      { type: 'h2', text: 'What the exciting years cost' },
      {
        type: 'p',
        text: 'The systems I loved were the ones with clever abstractions, and cleverness is a tax paid later by someone else. Here is what the invoice looked like:',
      },
      {
        type: 'list',
        items: [
          'A plugin API used by exactly two internal teams, both of which had to be consulted before any change.',
          'A migration layer that made every schema change a three-week negotiation.',
          'Metrics so detailed that the useful signal was unfindable without the author present.',
        ],
      },
      {
        type: 'p',
        text: 'None of this was bad engineering. It was good engineering aimed at the wrong problem — optimising for the interesting part of the job, which is building, instead of the expensive part, which is **keeping**.',
      },
      { type: 'figure', cover: 2, caption: 'Four years, one incident, zero dashboards worth the name.' },
      { type: 'h2', text: 'A working definition' },
      {
        type: 'p',
        text: 'When I review a design now, I ask three questions in this order: Can you delete it? Can you replace it in a week? Can you explain it in a paragraph? If all three are yes, the system is probably fine, whatever it is written in.',
      },
      {
        type: 'p',
        text: 'The queue passed all three. That is why I still think about it — not because it was impressive, but because it was the only thing I built that did not need me.',
      },
    ],
  },
  {
    slug: 'the-museum-of-almost-famous',
    title: 'The museum of almost famous',
    dek: 'Taste has an afterlife, and it is mostly administrative. On the artists rescued by archivists and the ones nobody filed correctly.',
    author: 'miriam',
    topic: 'culture',
    date: '2026-09-24',
    readTime: 6,
    claps: 1870,
    responses: 54,
    memberOnly: false,
    cover: 0,
    trending: 5,
    body: [
      {
        type: 'p',
        text: 'There is a room in a mid-sized European archive, unheated, containing about four hundred works by artists who exhibited once or twice and then stopped. The cataloguing convention for most of them is a single line: *active dates unknown*.',
      },
      {
        type: 'p',
        text: 'That phrase does so much work. It is a factual statement and a verdict at the same time.',
      },
      { type: 'h2', text: 'Reputation is a filing system' },
      {
        type: 'p',
        text: 'We talk about the canon as though it were the result of judgement. In practice it is the result of **paperwork**: who was accessioned, who was photographed, who had a dealer who kept records, whose estate could afford to argue.',
      },
      {
        type: 'quote',
        text: 'Almost nothing survives on merit alone. It survives because somebody had a reason to file it.',
      },
      {
        type: 'p',
        text: 'Which means the rescues we celebrate — the rediscovered painter, the posthumous monograph — are usually not corrections of an aesthetic error. They are corrections of an administrative one, made possible by a curator with a spare summer and an institution willing to pay for photography.',
      },
      { type: 'h2', text: 'What gets lost on purpose' },
      {
        type: 'p',
        text: 'The uncomfortable corollary: plenty of work was allowed to disappear because it was inconvenient. Work made by people without estates. Work that contradicted a national narrative. Work that was simply embarrassing to the people who owned it.',
      },
      {
        type: 'p',
        text: 'I do not think the archive can be fixed. I think it can be read differently — as a record of decisions rather than a record of quality. Once you do that, the four hundred unknowns stop being a sad footnote and become the actual subject: a document of who had the resources to be remembered.',
      },
      {
        type: 'p',
        text: 'The next time a retrospective is announced as a rediscovery, check the credits. Somebody paid for the frames.',
      },
    ],
  },
  {
    slug: 'restraint-is-a-feature',
    title: 'Restraint is a feature',
    dek: 'The best interfaces I have used all removed something. A short argument for designing by subtraction.',
    author: 'devin',
    topic: 'design',
    date: '2026-09-19',
    readTime: 5,
    claps: 3640,
    responses: 118,
    memberOnly: false,
    cover: 4,
    trending: 6,
    body: [
      {
        type: 'p',
        text: 'Every product meeting I have been in has ended with something added. Nobody has ever been congratulated for the thing they talked the room out of, which means the incentive structure of design work points in exactly the wrong direction.',
      },
      { type: 'h2', text: 'Addition is legible, subtraction is not' },
      {
        type: 'p',
        text: 'A new feature has a name, a demo, and a launch post. A removed feature has none of those things; it has a slightly calmer screen and a user who never notices what is missing. The work is real and the evidence is invisible, so the work does not get done.',
      },
      {
        type: 'quote',
        text: 'You cannot demo an absence. That is a marketing problem, not a design one — but marketing decides the roadmap.',
      },
      {
        type: 'p',
        text: 'The fix is to make subtraction legible. Count the controls on a screen and track the number over time. Publish it. Give the person who removed three buttons the same standing as the person who shipped a mode.',
      },
      { type: 'h2', text: 'A test I actually use' },
      {
        type: 'list',
        items: [
          'Would a first-time user miss this if it were gone? If no, it is already gone.',
          'Does this element earn the space it takes from the content? Most decoration does not.',
          'Can hierarchy be solved with size and whitespace instead of colour, borders, and shadow?',
        ],
      },
      {
        type: 'p',
        text: 'The third one is the important one. Most interfaces I review are loud because the designer reached for emphasis before reaching for **scale**. A bigger word beats a coloured box almost every time, and it costs nothing.',
      },
      {
        type: 'p',
        text: 'Restraint is not minimalism as a style. It is the discipline of letting one thing be the point.',
      },
    ],
  },
  {
    slug: 'the-second-draft-is-the-argument',
    title: 'The second draft is the argument',
    dek: 'First drafts are where you find out what you think. Second drafts are where you find out whether it holds.',
    author: 'miriam',
    topic: 'writing',
    date: '2026-09-14',
    readTime: 7,
    claps: 2980,
    responses: 87,
    memberOnly: true,
    cover: 3,
    body: [
      {
        type: 'p',
        text: 'I used to treat revision as polish — the part where you fix commas and delete adverbs. That is the last five per cent. The other ninety-five is argument, and it is unglamorous and slightly nauseating.',
      },
      { type: 'h2', text: 'Find the sentence you are avoiding' },
      {
        type: 'p',
        text: 'Every draft has one. It is usually a claim you softened, hedged, or buried in the middle of a paragraph so a reader might scroll past it. Find it, move it to the front, and write it as plainly as you can bear.',
      },
      {
        type: 'quote',
        text: 'If you would not say the sentence out loud to someone who disagrees with you, it is not an argument yet. It is a mood.',
      },
      { type: 'h2', text: 'The three passes' },
      {
        type: 'list',
        items: [
          '**Structure.** Read only the first sentence of each paragraph. If that sequence does not make sense on its own, the piece does not either.',
          '**Evidence.** Every claim gets either a source, an example, or an admission that it is a hunch. Hunches are fine; disguised hunches are not.',
          '**Voice.** Last, and only last. Now you may care about rhythm.',
        ],
      },
      {
        type: 'p',
        text: 'Doing these in order matters. Most people do voice first because voice is enjoyable, which is why so much writing is beautifully composed and structurally hollow.',
      },
      { type: 'figure', cover: 1, caption: 'Structure pass: read the first sentences only.' },
      {
        type: 'p',
        text: 'The other thing nobody warns you about is that the second draft is often worse than the first. It is flatter, more careful, and it has lost the energy that made you write the thing at all. That is normal. The third draft is where the energy comes back, this time attached to something defensible.',
      },
      {
        type: 'p',
        text: 'If your second draft reads badly, keep going. If it reads well, be suspicious.',
      },
    ],
  },
  {
    slug: 'against-the-infinite-roadmap',
    title: 'Against the infinite roadmap',
    dek: 'A plan with no end date is not a plan. It is a way of never having to decide what you will not do.',
    author: 'tomas',
    topic: 'work',
    date: '2026-09-08',
    readTime: 6,
    claps: 2240,
    responses: 76,
    memberOnly: false,
    cover: 5,
    body: [
      {
        type: 'p',
        text: 'The document was forty-one slides and covered eighteen months. Every initiative was present, everything was prioritised as high, and there was no version of the future in which any of it was finished.',
      },
      {
        type: 'p',
        text: 'I have seen this document at four companies. It is always well made. It is always useless.',
      },
      { type: 'h2', text: 'What a roadmap is for' },
      {
        type: 'p',
        text: 'Not prediction — prediction is impossible past about a quarter. A roadmap exists to make trade-offs visible in advance, so that when the trade-off arrives, the argument has already been had.',
      },
      {
        type: 'quote',
        text: 'A roadmap with nothing in the “not doing” column is a wish list with a Gantt chart.',
      },
      { type: 'h2', text: 'The finite version' },
      {
        type: 'list',
        items: [
          'Six to eight weeks, no longer. Beyond that you are writing fiction.',
          'One stated outcome, in a sentence a customer would recognise.',
          'An explicit list of what the team will decline during the period.',
          'A named person who can end the period early if the premise breaks.',
        ],
      },
      {
        type: 'p',
        text: 'The third item is the one that gets resisted, because declining things is where the political cost lives. That resistance is the entire problem: an organisation that cannot say no in advance will say no badly, later, in a meeting about headcount.',
      },
      {
        type: 'p',
        text: 'Shorten the horizon until the trade-offs hurt. That discomfort is the plan working.',
      },
    ],
  },
  {
    slug: 'counting-animals-in-the-dark',
    title: 'Counting animals in the dark',
    dek: 'Field methods, and why the least glamorous part of a study usually determines whether you can trust the rest of it.',
    author: 'amy',
    topic: 'science',
    date: '2026-09-03',
    readTime: 9,
    claps: 1460,
    responses: 41,
    memberOnly: false,
    cover: 0,
    body: [
      {
        type: 'p',
        text: 'The result made the journal cover. The method section was four paragraphs. If you want to know whether to believe the result, read the four paragraphs.',
      },
      { type: 'h2', text: 'Detection is not abundance' },
      {
        type: 'p',
        text: 'Every count is really a count of *detected* animals, and detection probability varies with weather, time of night, observer fatigue, moon phase, and whether the animal has learned to avoid you. Ignore that and a population decline can be an artefact of a colder survey season.',
      },
      {
        type: 'quote',
        text: 'The trend line is the easy part. The confidence in the trend line lives in the boring paragraph about how many nights were unusable.',
      },
      { type: 'h2', text: 'What to look for' },
      {
        type: 'list',
        items: [
          'Repeated surveys at the same sites, not one good night at many sites.',
          'A stated detection method and an estimate of how often it misses.',
          'Observer rotation, or an acknowledgement of observer effects.',
          'Raw counts in a supplement, not only modelled estimates.',
        ],
      },
      {
        type: 'p',
        text: 'None of this is exciting. It is also the difference between a finding and a story we tell ourselves about a finding — and in a field where the headline gets quoted for a decade and the method section gets read by nine people, that difference is worth four extra paragraphs.',
      },
      { type: 'figure', cover: 2, caption: 'Fourteen survey nights; three discarded for weather.' },
    ],
  },
  {
    slug: 'a-typography-of-calm',
    title: 'A typography of calm',
    dek: 'Warm paper, one accent, and a scale that does the shouting. Notes from rebuilding an interface with almost no colour.',
    author: 'nadia',
    topic: 'design',
    date: '2026-08-27',
    readTime: 8,
    claps: 3120,
    responses: 99,
    memberOnly: false,
    cover: 4,
    body: [
      {
        type: 'p',
        text: 'The brief said: make it feel like reading, not like using. Every decision after that followed from trying to take the sentence literally.',
      },
      { type: 'h2', text: 'Paper first' },
      {
        type: 'p',
        text: 'Pure white is a light source. Warm off-white is a surface. The difference is a few thousandths in the red channel and it changes the entire emotional register of a page — you stop feeling lit and start feeling seated.',
      },
      {
        type: 'quote',
        text: 'Background colour is the loudest element on any page, precisely because nobody argues about it.',
      },
      { type: 'h2', text: 'One accent, used rarely' },
      {
        type: 'p',
        text: 'We had a green. It appears in a handful of places across the whole site: the wordmark dot, membership actions, an active state, and a single hairline in the footer. Everything else is ink, paper, and gray.',
      },
      {
        type: 'list',
        items: [
          'Ink for the highest-emphasis action, as a solid pill with no shadow.',
          'Gray for everything that supports the action rather than competing with it.',
          'Blue reserved for links only, so a blue thing always means “go somewhere”.',
          'Green reserved for the brand and for commitment moments: follow, subscribe, membership.',
        ],
      },
      { type: 'h2', text: 'Scale instead of decoration' },
      {
        type: 'p',
        text: 'The temptation when a layout feels flat is to add texture — a shadow, a gradient, a border, an icon. Almost every time, the real problem is that two elements have the same size, and the fix is to make one of them much larger.',
      },
      {
        type: 'p',
        text: 'Our hero headline runs to 120 pixels on a desktop. It is not decorative; it is the entire hierarchy, doing the job that three card borders and a drop shadow would otherwise do badly.',
      },
      { type: 'figure', cover: 3, caption: 'Two elements, one size, no hierarchy. Change the size, not the styling.' },
      {
        type: 'p',
        text: 'Flatness is not the absence of design. It is the decision to spend the whole budget on type and space, and to trust the reader enough not to point at things.',
      },
    ],
  },
]

/* -- Derived helpers ---------------------------------------------------- */

export const getAuthor = (handle) =>
  authors.find((a) => a.handle === handle.replace(/^@/, '')) || null

export const getTopic = (slug) => topics.find((t) => t.slug === slug) || null

export const getStory = (handle, slug) =>
  stories.find((s) => s.slug === slug && s.author === handle.replace(/^@/, '')) ||
  null

export const getStoryBySlug = (slug) => stories.find((s) => s.slug === slug) || null

export const storiesByTopic = (slug) =>
  stories.filter((s) => s.topic === slug).sort((a, b) => new Date(b.date) - new Date(a.date))

export const storiesByAuthor = (handle) => {
  const h = handle.replace(/^@/, '')
  return stories
    .filter((s) => s.author === h)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

export const trendingStories = () =>
  [...stories].filter((s) => s.trending).sort((a, b) => a.trending - b.trending)

export const latestStories = (limit) => {
  const sorted = [...stories].sort((a, b) => new Date(b.date) - new Date(a.date))
  return typeof limit === 'number' ? sorted.slice(0, limit) : sorted
}

export const topStories = (limit = 4) =>
  [...stories].sort((a, b) => b.claps - a.claps).slice(0, limit)

export const storyPath = (story) => `/@${story.author}/${story.slug}`
export const authorPath = (author) => `/@${author?.handle ?? ''}`
export const topicPath = (topic) => `/topic/${topic?.slug ?? ''}`

/** "9 Oct 2026" — editorial date style, no locale-dependent surprises. */
const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

export const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number)
  return `${d} ${MONTHS[m - 1]} ${y}`
}

export const formatCount = (n) => {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1).replace(/\.0$/, '')}K`
  return String(n)
}
