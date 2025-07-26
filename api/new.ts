// /start handler
export async function handleStartCommand(ctx) {
  const COMMAND = "/start";
  const channelUrl = "t.me/nitrovpns0";
  const targetUrl = "t.me/+GdntFEXNhM05ODRk";

  // Welcome message with Markdown formatting
  const reply = `
Discover FREE Money-Making Methods! 💸🚀🤑🤑

Tired of scams? Get REAL cash with these 100% FREE methods! 💸
No experience required - step-by-step blueprints to guide you! 💰💰 

What’s Inside?
🏦 Bank Logs & CC Methods 
🏦 Free Cashout Walkthroughs
🏦 2025 Cashapp Methods 🔥
 
All completely FREE - no hidden costs or signups!

👇 Seize this life-changing opportunity NOW! 👇 🔗 [Join Here](${targetUrl})
`;

  try {
    await ctx.reply(reply, {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "🌐 Free VPNs/Proxies (Socks5 & Socks4)",
              url: channelUrl,
            },
          ],
          [{ text: "🎓 Make $500 - $7,000 Free", url: targetUrl }],
        ],
      },
    });
    console.log(`Reply to ${COMMAND} command sent successfully.`);
  } catch (error) {
    console.error(`Something went wrong with the ${COMMAND} command:`, error);
  }
}
export async function sendImageCommand(ctx) {
  const media = [
    {
      type: "photo",
      media:
        "https://raw.githubusercontent.com/emerur/limitless/main/photo_6028285951022843801_y.jpg",
    },
    {
      type: "photo",
      media:
        "https://raw.githubusercontent.com/emerur/limitless/main/photo_6030537750836529162_y.jpg",
    },
    {
      type: "photo",
      media:
        "https://raw.githubusercontent.com/emerur/limitless/main/photo_6032721892030400596_y.jpeg",
    },
    {
      type: "photo",
      media:
        "https://raw.githubusercontent.com/emerur/limitless/main/photo_6034973691844085628_y.jpg",
    },
    {
      type: "photo",
      media:
        "https://raw.githubusercontent.com/emerur/limitless/main/photo_6034973691844085630_y.jpg",
    },
  ];
  // Send image first
  await ctx.replyWithMediaGroup(media);
}

// Register the /start command handler
bot.command("start", async (ctx) => {
  // Send image first
  await sendImageCommand(ctx);
  await handleStartCommand(ctx);
});
