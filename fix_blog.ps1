$f = 'd:\chopk-blog\src\data\blog.ts'
$c = [System.IO.File]::ReadAllText($f)

# Post 0: Founder Story - title and excerpt
$c = $c.Replace('title: "Founder Story - ChopK"', 'title: "Founder Story: Why I Built a Pelvic Floor Training App for Men"')
$c = $c.Replace("excerpt: `"In my early 20s, I had a problem I didn't know how to talk about.`"", "excerpt: `"In my early 20s, I struggled with control during intimacy. Pills weren't the answer `u2014 pelvic floor training was.`"")

# Founder story closing
$c = $c.Replace("That's when **ChopK** clicked.", "That's when the idea for the **science-backed ChopK app** clicked.")
$c = $c.Replace("ChopK is the version I wish existed in my late teens and early 20s", "ChopK is the pelvic floor training app I wish existed in my late teens and early 20s")

# Post CTA sections - replace all generic "Start ChopK today." with stronger CTAs
$c = $c.Replace('**Start ChopK today.**', '**Start your free pelvic floor training with ChopK today.**')
$c = $c.Replace('**Start ChopK and train the full range.**', '**Start your pelvic floor training with ChopK `u2014 train the full range.**')

# Post 3: find pelvic floor muscles CTA
$c = $c.Replace('**Try ChopK and confirm your form.**', '**Try the science-backed ChopK app and confirm your form.**')

# Post 4: kegels vs reverse kegels CTA
$c = $c.Replace('**Start ChopK and remove the guesswork.**', '**Start your pelvic floor training with ChopK `u2014 remove the guesswork.**')

# Post 1: pillar CTA
$c = $c.Replace("**Start ChopK's guided training.**", "**Start your guided pelvic floor training with ChopK.**")

# Want this guided section headers
$c = $c.Replace('## Want this guided?', '## Want Science-Backed Guidance?')
$c = $c.Replace('## Want it structured?', '## Want a Structured Pelvic Floor Plan?')
$c = $c.Replace('## Want a system (not random tips)?', '## Want a Science-Backed System (Not Random Tips)?')
$c = $c.Replace('## Want a structure that builds confidence?', '## Want a Training Structure That Builds Real Confidence?')
$c = $c.Replace('## Want predictable progress?', '## Want Predictable Pelvic Floor Progress?')
$c = $c.Replace("## Don't wait until confidence drops", "## Don't Let Confidence Drop `u2014 Start Training Now")
$c = $c.Replace('## Want a private plan you can commit to?', '## Want a Private Pelvic Floor Training Plan?')
$c = $c.Replace("## Want this plan guided (so you don't guess)?", '## Want This Plan Guided by the ChopK App?')
$c = $c.Replace('## Want structure (without overdoing it)?', '## Want Structured Pelvic Floor Training (Without Overdoing It)?')
$c = $c.Replace('## Stop guessing (this is where ChopK helps)', '## Stop Guessing `u2014 Let ChopK Guide Your Pelvic Floor Training')
$c = $c.Replace('## Stop wasting months', '## Stop Wasting Months on Wrong Kegel Form')
$c = $c.Replace('## The fast path: remove guessing', '## The Fast Path: Remove Guessing from Your Kegel Training')
$c = $c.Replace('## Your next step (do not skip this)', '## Your Next Step Toward Lasting Control (Do Not Skip)')
$c = $c.Replace('## The missing piece', '## The Missing Piece: Structured Pelvic Floor Training')

[System.IO.File]::WriteAllText($f, $c)
Write-Host "Done - blog.ts updated"
