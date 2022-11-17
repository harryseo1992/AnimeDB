using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AnimeDB.Models;
using Microsoft.EntityFrameworkCore;

namespace AnimeDB.Data
{
    public class ApplicationDbContext: DbContext {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder) {
            base.OnModelCreating(builder);
            
            builder.Entity<Anime>().ToTable("Animes");

            builder.Entity<Anime>().HasData(Seeding.GetAnimes());
        }

        public DbSet<Anime>? Animes { get; set; }
    }

}