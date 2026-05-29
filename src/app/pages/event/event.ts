import { Component } from '@angular/core';
import { Navbar } from '../../reuseable/navbar/navbar';
import { Footer } from '../../footer/footer/footer';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-event',
  imports: [Navbar, Footer, CommonModule, RouterLink],
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  events = [
    {
      id: 1,

      slug: 'secret-to-attaining-peace',

      title: 'Bhagwat Katha By Holi Guru Bageshwari Devi',

      image: 'assets/event/event3.png',

      date: '30 & 31 May 2026',

      time: '04:30 PM to 06:30 PM',

      location: '70 Moira Street Leicester, UK LE4 6LA',

      category: 'Spiritual Satsang',

      description:
        'Join the divine spiritual satsang and discover peace, happiness, and devotion through chanting God’s holy name.',

      button: 'More Details',
    },

    {
      id: 2,

      slug: 'shree-hanuman-charitra-katha',

      title: 'Shree Hanuman Charitra Katha',

      image: 'assets/event/event-2.jpeg',

      date: '3 to 5 July 2026',

      time: '04:00 PM to 08:00 PM',

      location: '70 Moira Street Leicester, UK LE4 6LA',

      category: 'Hanuman Katha Mahotsav',

      description:
        'Experience the divine life, bhakti, courage, and teachings of Prabhu Hanuman through sacred katha and bhajans.',

      button: 'More Details',
    },
  ];

  pastEvents = [
    {
      title: 'Shiv Mahapuran Katha',

      image: 'assets/event/img1.png',

      date: '12 Feb 2026',

      time: '05:00 PM',

      category: 'Spiritual Katha',

      description:
        'Experience the divine stories and spiritual wisdom of Lord Shiva through sacred Shiv Mahapuran Katha.',
    },

    {
      title: 'Pooja & Bhandara',

      image: 'assets/event/img2.png',

      date: '28 Jan 2026',

      time: '12:00 PM',

      category: 'Temple Celebration',

      description:
        'Join the holy Pooja and Bhandara ceremony filled with blessings, devotion, and positivity.',
    },

    {
      title: 'Mataji Ki Chowki',

      image: 'assets/event/img3.png',

      date: '15 Dec 2025',

      time: '07:00 PM',

      category: 'Bhajan Sandhya',

      description:
        'Celebrate devotional bhajans and seek the divine blessings of Maa Durga with faith.',
    },
  ];
}
