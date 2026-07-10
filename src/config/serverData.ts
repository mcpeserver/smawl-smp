import { 
  Monitor, Smartphone, ThumbsUp, Shield,
  Network, Zap, BookOpen, ShoppingBag, MessageSquare,
  Smile, ShoppingCart, Package, Send, MessageCircle, MapPin, ShieldCheck, Users, Sparkles, Target, PlusCircle,
  CheckCircle2, Crown, Coins, Swords,
  Hammer, Video, Radio, Youtube
} from 'lucide-react';

// Import local image assets cleanly
import logoImg from '../assets/images/smawl_smp_logo_1783675891058.jpg';
import heroBgImg from '../assets/images/smp_hero_bg_1783675640255.jpg';

export const SERVER_DATA = {
  // Brand & Basic Info
  serverName: 'Smawl SMP',
  serverBadge: 'Server Minecraft Survival Premium',
  tagline: 'Server Minecraft Survival Java & Bedrock dengan berbagai fitur menarik untuk dimainkan bersama teman.',
  
  // Official Links & Contact
  whatsappGroupLink: 'https://chat.whatsapp.com/KsxCc5n4cGZ750PwmsX4sh?s=cl&p=a&mlu=4',
  discordLink: 'https://discord.gg/Pnz8cPEnK',
  voteLink: 'https://minecraft-mp.com/server-s359209',
  contactNumber: '0882007036590',
  contactWhatsAppLink: 'https://wa.me/62882007036590',
  contactServiceLabel: 'Sell Plugin',

  // Image assets
  images: {
    logo: logoImg,
    heroBg: heroBgImg,
  },

  // Connection Info
  connection: {
    java: {
      title: 'Java Edition',
      subtitle: 'Untuk PC / Mac / Launcher',
      ip: 'play.smawlsmp.my.id',
      port: '25604',
      portLabel: 'CUSTOM', // or DEFAULT
    },
    bedrock: {
      title: 'Bedrock Edition',
      subtitle: 'Untuk HP / Android / iOS / Win10 / Console',
      ip: 'play.smawlsmp.my.id',
      port: '25604',
      portLabel: 'CUSTOM', // or DEFAULT
    }
  },

  // Portal Cards (Bento navigation dashboard on homepage)
  portalCards: [
    {
      id: 'koneksi' as const,
      title: 'Koneksi Server',
      desc: 'Dapatkan IP & Port resmi untuk Java & Bedrock dengan fitur salin instan.',
      icon: Network,
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-[#00F0FF]',
    },
    {
      id: 'fitur' as const,
      title: 'Fitur Unggulan',
      desc: 'Jelajahi berbagai sistem seru seperti GSit, Player Shop, dan Custom Items kami.',
      icon: Zap,
      color: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-400',
    },
    {
      id: 'rules' as const,
      title: 'Aturan & Rank Gratis',
      desc: 'Pelajari regulasi komunitas dan cara mendapatkan kedudukan VIP secara cuma-cuma.',
      icon: BookOpen,
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-400',
    },
    {
      id: 'store' as const,
      title: 'Rank Store & Staff',
      desc: 'Dukung keberlangsungan server, lihat harga VIP Rank, serta roster moderator kami.',
      icon: ShoppingBag,
      color: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-400',
    },
    {
      id: 'kontak' as const,
      title: 'Hubungi Kami',
      desc: 'Kontak WhatsApp official, Vote server harian, dan link Discord komunitas Smawl.',
      icon: MessageSquare,
      color: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-400',
    },
  ],

  // Quick Info grid cards
  quickInfoCards: [
    {
      title: 'Java Edition',
      description: 'Mainkan di PC/Mac menggunakan Client Minecraft asli dengan performa grafis terbaik.',
      icon: Monitor,
      badge: 'PC / MAC',
      color: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/20',
    },
    {
      title: 'Bedrock Edition',
      description: 'Bergabung melalui smartphone (Android/iOS), konsol, atau Windows 10 Edition kapan saja.',
      icon: Smartphone,
      badge: 'MOBILE / CONSOLE',
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      title: 'Vote Server',
      description: 'Dukung server kami setiap hari di platform voting untuk mendapatkan hadiah menarik.',
      icon: ThumbsUp,
      badge: 'DUKUNG KAMI',
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    },
    {
      title: 'Claim Land',
      description: 'Amankan bangunan dan barang berharga milikmu dari serangan griefer dan pencuri.',
      icon: Shield,
      badge: '100% AMAN',
      color: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    },
  ],

  // Server Features
  features: [
    {
      name: 'GSit',
      desc: 'Duduk, berbaring, atau bersandar di mana saja di dalam dunia Minecraft untuk mengekspresikan karaktermu.',
      icon: Smile,
      color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    },
    {
      name: 'Shop',
      desc: 'Beli dan jual blok atau item berharga menggunakan sistem ekonomi dalam game yang seimbang.',
      icon: ShoppingCart,
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      name: 'Kit',
      desc: 'Dapatkan paket peralatan awal (starter pack) gratis untuk membantumu langsung memulai petualangan.',
      icon: Package,
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    },
    {
      name: 'TPA',
      desc: 'Kirimkan permintaan teleportasi instan untuk berkumpul dengan teman setimmu dalam sekejap.',
      icon: Send,
      color: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
    },
    {
      name: 'MSG',
      desc: 'Kirimkan pesan rahasia secara langsung (Direct Message) ke player lain dengan aman dan terprivasi.',
      icon: MessageCircle,
      color: 'text-pink-400 bg-pink-400/10 border-pink-400/20',
    },
    {
      name: 'Warp',
      desc: 'Akses cepat ke berbagai lokasi penting server seperti Spawn, Shop, atau area event publik.',
      icon: MapPin,
      color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
    },
    {
      name: 'Claim Land',
      desc: 'Lindungi rumah dan batas tanah milikmu menggunakan sistem proteksi area untuk mencegah griefing.',
      icon: ShieldCheck,
      color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20',
    },
    {
      name: 'Team',
      desc: 'Buat kelompok, jalin aliansi, bangun klan, dan koordinasikan petualangan bersama kawan-kawanmu.',
      icon: Users,
      color: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    },
    {
      name: 'Custom Enchant',
      desc: 'Tingkatkan kekuatan senjata dan baju zirahmu melampaui batas standar dengan sihir-sihir kustom pilihan.',
      icon: Sparkles,
      color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
    },
    {
      name: 'Bounty',
      desc: 'Berikan imbalan koin bagi siapa saja yang berhasil melumpuhkan buronan target yang kamu tentukan.',
      icon: Target,
      color: 'text-red-400 bg-red-400/10 border-red-400/20',
    },
    {
      name: 'Dan Masih Banyak Lagi',
      desc: 'Datang dan jelajahi langsung seluruh fitur premium Smawl SMP bersama komunitas pemain aktif kami.',
      icon: PlusCircle,
      color: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/20 text-glow',
    },
  ],

  // Server Rules
  serverRules: [
    {
      title: 'Dilarang Menghina Orang Lain',
      description: 'Tidak menghina menggunakan nama orang tua atau sejenisnya. Jaga kesantunan kata-kata.',
      punishment: 'Pelanggar akan mendapatkan mute selama 10–30 menit.',
      type: 'Chat Rule',
    },
    {
      title: 'Dilarang Menggunakan Cheat',
      description: 'Penggunaan segala jenis cheat client, hacked client, hack mod, fly, speed, atau tools ilegal dilarang keras.',
      punishment: 'Pelanggar langsung dikenakan Ban Permanen tanpa toleransi.',
      type: 'Anti-Cheat',
    },
    {
      title: 'Dilarang Menggunakan X-Ray',
      description: 'Penggunaan resource pack X-Ray, modifikasi X-Ray, atau hack penglihatan tembus pandang untuk menambang mineral dilarang.',
      punishment: 'Pelanggar akan di-Ban dan seluruh hasil tambang di-wipe.',
      type: 'Fair Play',
    },
    {
      title: 'Bermain dengan Sportif',
      description: 'Bermainlah dengan adil, tidak mengeksploitasi celah bug server, tidak merusak bangunan orang lain (griefing), atau merusak kesenangan sesama player.',
      punishment: 'Bermain aman dan jalin persahabatan.',
      type: 'Gameplay',
    },
    {
      title: 'Tidak Meminta Item kepada Staff',
      description: 'Dilarang keras meminta barang gratis, alat tempur, koin, atau hak istimewa OP/Creative kepada jajaran Admin maupun Helper.',
      punishment: 'Permintaan berulang dapat berujung pada hukuman bisu (mute) sementara.',
      type: 'Staff Respect',
    },
  ],

  // WhatsApp & Discord Group rules
  groupRules: [
    { rule: 'Tidak mengirim konten 18+', icon: CheckCircle2 },
    { rule: 'Tidak menghina orang lain', icon: CheckCircle2 },
    { rule: 'Tidak melakukan tindakan scam (penipuan)', icon: CheckCircle2 },
    { rule: 'Tidak membagikan promosi di luar server Smawl SMP', icon: CheckCircle2 },
    { rule: 'Tidak melakukan penyebaran tag grup tanpa alasan penting', icon: CheckCircle2 },
  ],

  // Shop Tiers (Rank prices)
  tiers: [
    {
      name: 'VIP',
      price: '30K',
      fullPrice: 'Rp 30.000',
      icon: Sparkles,
      color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(34,211,238,0.1)]',
    },
    {
      name: 'VIP+',
      price: '50K',
      fullPrice: 'Rp 50.000',
      icon: ShieldCheck,
      color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(52,211,153,0.1)]',
    },
    {
      name: 'MVP',
      price: '80K',
      fullPrice: 'Rp 80.000',
      icon: Gem,
      color: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(96,165,250,0.1)]',
    },
    {
      name: 'MVP+',
      price: '100K',
      fullPrice: 'Rp 100.000',
      icon: Crown,
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
      shadow: 'hover:shadow-[0_10px_30px_rgba(251,191,36,0.15)]',
      premium: true,
    },
  ],

  // Donation/support items
  donateItems: [
    {
      title: 'Beli Rank',
      desc: 'Dapatkan pangkat istimewa permanen (VIP, VIP+, MVP, MVP+) dengan keuntungan eksklusif di lobi dan dunia survival.',
      icon: Crown,
      badge: 'POPULER',
      color: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    },
    {
      title: 'Beli SK',
      desc: 'Beli Surat Kepemilikan (SK) tanah tambahan atau item utilitas khusus untuk menunjang keamanan wilayahmu.',
      icon: Coins,
      badge: 'UTILITY',
      color: 'text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/20',
    },
    {
      title: 'Beli Senjata',
      desc: 'Dapatkan skin kosmetik, senjata custom tangguh, atau perlengkapan perang pelindung premium di dalam game.',
      icon: Swords,
      badge: 'COMBAT',
      color: 'text-red-400 bg-red-400/10 border-red-400/20',
    },
  ],

  // Server Staff List
  staffList: [
    { name: 'BocilRusuh', role: 'Owner / Admin' as const, skinSeed: 'bocil' },
    { name: 'JesszMC', role: 'Owner / Admin' as const, skinSeed: 'jessz' },
    { name: 'zrexsk', role: 'Helper' as const, skinSeed: 'zrex' },
    { name: 'kaikai', role: 'Helper' as const, skinSeed: 'kaikai' },
    { name: 'Sopyan', role: 'Helper' as const, skinSeed: 'sopyan' },
  ],

  // Free rank routing steps
  freeRankSteps: [
    {
      title: 'Upload TikTok',
      description: 'Buat video kreatif bertema Smawl SMP, tambahkan IP server kami, lalu upload ke akun TikTok milikmu.',
      icon: Video,
      color: 'bg-gradient-to-r from-pink-500/10 to-transparent border-pink-500/20 text-pink-400',
    },
    {
      title: 'Live TikTok',
      description: 'Lakukan siaran langsung (live streaming) saat berpetualang atau membangun markas di server Smawl SMP.',
      icon: Radio,
      color: 'bg-gradient-to-r from-red-500/10 to-transparent border-red-500/20 text-red-400',
    },
    {
      title: 'Upload YouTube',
      description: 'Buat video review gameplay, let\'s play, tutorial, atau cinematic pertamamu di Smawl SMP lalu publikasikan ke YouTube.',
      icon: Youtube,
      color: 'bg-gradient-to-r from-[#FF0000]/10 to-transparent border-[#FF0000]/20 text-[#FF0000]',
    },
    {
      title: 'Builder dari Event Admin',
      description: 'Ikuti ajang kompetisi membangun (building contest) resmi dari Admin, tunjukkan bakat arsitekturmu dan raih kemenangan.',
      icon: Hammer,
      color: 'bg-gradient-to-r from-blue-500/10 to-transparent border-blue-500/20 text-blue-400',
    },
  ]
};
