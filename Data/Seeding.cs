using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnimeDB.Models;

namespace AnimeDB.Data
{
    public class Seeding
    {
        public static List<Anime> GetAnimes() {
            List<Anime> animes = new List<Anime>() {
                new Anime() {
                    Title= "Bleach",
                    Description= "Ichigo Kurosaki gained the powers of a Soul Reaper through a chance encounter. As a Substitute Soul Reaper, Ichigo became caught in the turmoil of the Soul Society, a place where deceased souls gather. But with help from his friends, Ichigo overcame every challenge to become even stronger.",
                    ImageUrl= "https://pbs.twimg.com/media/FZfFIOvUIAU5ttM?format=jpg&name=medium"
                },
                new Anime() {
                    Title= "Chainsaw Man",
                    Description= "Denji is robbed of a normal teenage life, left with nothing but his deadbeat father's overwhelming debt. His only companion is his pet, the chainsaw devil Pochita, with whom he slays devils for money that inevitably ends up in the yakuza's pockets. All Denji can do is dream of a good, simple life: one with delicious food and a beautiful girlfriend by his side. But an act of greedy betrayal by the yakuza leads to Denji's brutal, untimely death, crushing all hope of him ever achieving happiness. Remarkably, an old contract allows Pochita to merge with the deceased Denji and bestow devil powers on him, changing him into a hybrid able to transform his body parts into chainsaws. Because Denji's new abilities pose a significant risk to society, the Public Safety Bureau's elite devil hunter Makima takes him in, letting him live as long as he obeys her command. Guided by the promise of a content life alongside an attractive woman, Denji devotes everything and fights with all his might to make his naive dreams a reality.",
                    ImageUrl= "https://www.animesenpai.net/wp-content/uploads/2022/07/20220729_142507_compress86-683x1024.jpg"
                },
                new Anime() {
                    Title= "Spy x Family",
                    Description= "With Anya Forger successfully enrolled at the renowned Eden Academy, Operation Strix advances to its second phase. To investigate Ostanian politician Donovan Desmond, Anya must either befriend his son Damian or collect eight Stella Stars to become an Imperial Scholar. Fortunately, Anya has already acquired her first star. In celebration, her adoptive father, Loid, decides to fulfill her wish to adopt a dog.",
                    ImageUrl= "https://m.media-amazon.com/images/I/71w3OQ-2UwL._AC_SY679_.jpg"
                },
                new Anime() {
                    Title= "One Piece",
                    Description= "Enter Monkey D. Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece.",
                    ImageUrl= "https://m.media-amazon.com/images/I/912KWSgjNQL.jpg"
                },
                new Anime() {
                    Title= "Mob Psycho 100 III",
                    Description= "After foiling a world-threatening plot, Shigeo 'Mob' Kageyama returns to tackle the more exhausting aspects of his mundane life—starting with filling out his school's nerve-racking career form. Meanwhile, he continues to assist his mentor Arataka Reigen and the office's new recruit, Katsuya Serizawa, in solving paranormal cases of their clients. While continuing his duties, Mob also works on gaining more independence in his esper and human lives, as well as trying to integrate better with the people around him.",
                    ImageUrl= "https://m.media-amazon.com/images/I/71YJDT6YUYL._AC_SY741_.jpg"
                },
                new Anime() {
                    Title= "Bocchi the rock!",
                    Description= "Yearning to make friends and perform live with a band, lonely and socially anxious Hitori 'Bocchi' Gotou devotes her time to playing the guitar. On a fateful day, Bocchi meets the outgoing drummer Nijika Ijichi, who invites her to join Kessoku Band when their guitarist, Ikuyo Kita, flees before their first show. Soon after, Bocchi meets her final bandmate—the cool bassist Ryou Yamada.",
                    ImageUrl= "https://m.media-amazon.com/images/M/MV5BMDliMGEyMDItOGE1Mi00YWNhLTg3MGYtNWUyNGVhZDE5Y2YxXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
                },
                new Anime() {
                    Title= "Golden Kamuy",
                    Description= "Fourth season of Golden Kamuy.",
                    ImageUrl= "https://m.media-amazon.com/images/I/81BSFchbaoL._RI_.jpg"
                }
            };
            return animes;
        }

    }
}